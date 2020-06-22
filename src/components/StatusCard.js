import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Comment from './Comment';
import './StatusCard.css';

class StatusCard extends Component {
  render() {
    return (
      <div class='statusCard'>
        <div></div>
        <Comment />
      </div>
    );
  }
}

export default hot(module)(StatusCard);
