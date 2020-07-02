import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      currentCommentChars: 0
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  render() {
    return (
      <div className='comment'>
        <textarea placeholder='Write here...' onChange={this.handleTextAreaChange}></textarea>
        <small>{this.props.maxLetters - this.state.currentCommentChars} Remaining</small>
      </div>
    );
  }

  handleTextAreaChange(event) {
    this.setState({
      currentCommentChars: event.target.value.length
    });
  }
}

export default Comment;
