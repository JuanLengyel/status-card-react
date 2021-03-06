import React, { Component } from 'react';
import StatusCard from './components/StatusCard'
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        <StatusCard />
      </div>
    );
  }
}

export default hot(module)(App);
