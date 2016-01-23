import React, { Component } from 'react';
import Item from './Item';

var TopItems = React.createClass({
  sortByScore: function() {
    var items = this.props.items
    items.sort(function(a, b) {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    });
    this.setState({items: items});
  },

  render: function() {
    var rank = 0;
    var all_items = this.props.items.map(function(item) {
      rank++;
      return (
        <Item key={item.id} rank={rank} item={item} />
      );
    });

    return (
      <div>
        <SortButton items={this.props.items} sortByScore={this.sortByScore}/>
        <div className="top-stories">
          {all_items}
        </div>
      </div>
    );
  }
});

var SortButton = React.createClass({
  render: function() {
    return (
      <div>
        <a className='button' onClick={this.props.sortByScore}>Sort!</a>
      </div>
    );
  }
});

export default TopItems;