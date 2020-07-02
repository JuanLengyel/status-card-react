import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Like from './Like';
import Comment from './Comment';
import './StatusCard.css';

class StatusCard extends Component {
  render() {
    return (
      <div className='statusCard'>
        <div className='mainContainer'>
          <div className='statusHead'>
            <div className='imageContainer'></div>
            <div className='title'>
              <a href='#'>Master of the Universe</a>
            </div>
            <div className='statusTime'>Posted 10 min ago</div>
          </div>
          <p>Autem sed in. Nemo maiores dignissimos omnis doloribus alias similique qui praesentium id. Architecto dicta voluptatem eum eaque voluptas aspernatur.</p>
        <Like />
        </div>
        <Comment maxLetters={120} />
      </div>
    );
  }
}

export default hot(module)(StatusCard);
