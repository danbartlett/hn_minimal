import React, { Component } from 'react';
import Item from './Item';
import sortByScore from './sorter';

var TopItems = React.createClass({
  sortByScore: function() {
    this.setState({items: sortByScore(this.props.items)});
  },

  render: function() {
    var rank = 0;
    var all_items = this.props.items.map(function(item) {
      rank++;
      return (
        <Item key={item.id} rank={rank} item={item} />
      );
    });

    // Retired, sort button
    // <SortButton items={this.props.items} sortByScore={this.sortByScore}/>
    return (
      <div>
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