import React, { Component } from 'react';
import Item from './Item';

var TopItems = React.createClass({
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
        <div className="top-stories">
          {all_items}
        </div>
      </div>
    );
  }
});

export default TopItems;