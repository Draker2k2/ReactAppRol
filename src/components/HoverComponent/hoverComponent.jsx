import React, { Component } from 'react';

export default class HoverComponent extends Component {
  componentDidMount() {
    // a
  }
  render() {
    return (
      <div style={{ background: '#abbcf1', width: '200px' }}>
        <h1> <p> Hover on me </p> </h1>
      </div>
    );
  }
}
