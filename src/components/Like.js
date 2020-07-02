import React, { Component } from 'react';
import LikeIcon from './LikeIcon';
import icon from './like-reaction-unset.svg';
import './Like.css';

class Like extends Component {
  render() {
    return (
      <div>
        <LikeIcon />

        <hr></hr>
        
        <div>
          <button className='likeButton'>
            <img className='buttonContent' src={icon}/>
            <span className='buttonContent'>Like</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Like;
