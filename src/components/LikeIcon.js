import React, { Component } from 'react';
import icon from './like-reaction.svg';
import './LikeIcon.css';

class LikeIcon extends Component {
  render() {
    return (
      <div className='icon'>
        <img src={icon}></img>
      </div>
    );
  }
}

export default LikeIcon;
