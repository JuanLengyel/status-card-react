import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <textarea placeholder='Write here...'></textarea>
        <small>100 Remaining</small>
      </div>
    );
  }
}

export default Comment;
