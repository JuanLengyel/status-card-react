import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div class='comment'>
        <textarea placeholder='Write here...'></textarea>
        <small>100 Remaining</small>
      </div>
    );
  }
}

export default Comment;
