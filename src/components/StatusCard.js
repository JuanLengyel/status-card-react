import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Comment from './Comment'

class StatusCard extends Component {
  render() {
    return (
      <div>
        <Comment />
      </div>
    );
  }
}

export default hot(module)(StatusCard);
