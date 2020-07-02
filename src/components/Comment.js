import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
        currentCommentChars: 0
      , value: ''
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  render() {
    return (
      <div className='comment'>
        <textarea placeholder='Write here...' onChange={this.handleTextAreaChange} value={this.state.value}></textarea>
        <small>{this.props.maxLetters - this.state.currentCommentChars} Remaining</small>
      </div>
    );
  }

  handleTextAreaChange(event) {
    if (this.props.maxLetters - event.target.value.length + 1) {
      this.setState({
          currentCommentChars: event.target.value.length
        , value: event.target.value
      });
    }
    else {
      this.setState(prevState => ({
          currentCommentChars: prevState.currentCommentChars
        , value: prevState.value
      }));
    }
  }
}

export default Comment;
