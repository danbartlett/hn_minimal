import React, { Component } from 'react';

var Navigation = React.createClass({
  getInitialState: function() {
    return {lastUpdate: ''};
  },

  componentDidMount: function() {
    var lastUpdate = new Date();
    this.setState({lastUpdate: lastUpdate.toString()});
  },

  render: function() {
    return (
      <div className='navigation'>
        <h1>Hacker News</h1>
        <span>Last updated at {this.state.lastUpdate}</span>
      </div>
    );
  }
});

export default Navigation;
