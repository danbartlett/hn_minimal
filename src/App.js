import React, { Component } from 'react';
import Navigation from './Navigation';
import TopItems from './TopItems';
import sortByScore from './sorter';

var App = React.createClass({
  loadItems: function() {
    var api_url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    var that = this;

    $.ajax({
      url: api_url,
      dataType: 'json',
      cache: false,
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)

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

      that.setState({items: sortByScore(raw_items)});
    });
  },

  getInitialState: function() {
    return {items: []};
  },

  componentDidMount: function() {
    this.loadItems();
    if (this.props.autoreload == 'true') {
      setInterval(this.loadItems, 120000);
    }
  },

  render: function() {
    return (
      <TopItems items={this.state.items} />
    );
  }
});

export default App;