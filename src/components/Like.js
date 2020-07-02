import React, { Component } from 'react';
import LikeIcon from './LikeIcon';
import icon from './like-reaction-unset.svg';
import './Like.css';

class Like extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.liked && <LikeIcon />}

        <hr></hr>
        
        <div>
          <button className='likeButton' onClick={this.handleClickLike}>
            <img className='buttonContent' src={icon}/>
            <span className='buttonContent'>Like</span>
          </button>
        </div>
      </div>
    );
  }

  handleClickLike(event) {
    this.setState(previousState => ({
      liked: !previousState.liked
    }));
  }
}

export default Like;
