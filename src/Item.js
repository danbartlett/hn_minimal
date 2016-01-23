import React, { Component } from 'react';

var Item = React.createClass({
  extractDomain: function(url) {
    var domain;

    if (!url) {
      return false;
    }

    if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
    }
    else {
      domain = url.split('/')[0];
    }
    return domain.replace('www.', '');
  },

  render: function() {
    var item = this.props.item;
    var comments_url = 'https://news.ycombinator.com/item?id='+item.id;

    return (
      <div className='item'>
        <div className='vitals'>
          <div className='score'>{item.score}</div>
          <div className='comments'><a target='_blank' href={comments_url}>{item.descendants}</a></div>
        </div>
        <div className='content'>
          <div className='title'><a target='_blank' href={item.url}>{item.title}</a> <span className='domain'>({this.extractDomain(item.url)})</span></div>
        </div>
      </div>
    );
  }
});

export default Item;