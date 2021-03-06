import React, { Component } from 'react';
import Navigation from './Navigation';
import TopItems from './TopItems';
import * as helpers from './helpers';
var Loader = require('react-loader');

var App = React.createClass({
  loadItems: function() {
    var api_url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    var that = this;

    // Query TopStories
    $.ajax({
      url: api_url,
      dataType: 'json',
      cache: false,
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)

    // Loop through TopStories, and fetch individual items
    }).then( function(items) {
      var top_items = items.slice(0, 19).map(function(item) {
        return $.ajax({
          url: 'https://hacker-news.firebaseio.com/v0/item/' + item + '.json',
          dataType: 'json'
        });
      });
      return $.when.apply($, top_items);

    }).then( function() {
      var raw_items = $.map(arguments, function(value, i){
        return value[0];
      });

      that.setState({items: helpers.sortByScore(raw_items), loaded: true});
    });

    helpers.printLastUpdateTime();
  },

  getInitialState: function() {
    return {items: [], loaded: false};
  },

  componentDidMount: function() {
    this.loadItems();
    if (this.props.autoreload === true) {
      setInterval(this.loadItems, helpers.inMilliseconds(this.props.minutes));
    }
  },

  render: function() {
    return (
      <Loader loaded={this.state.loaded}>
        <TopItems items={this.state.items} />
      </Loader>
    );
  }
});

export default App;