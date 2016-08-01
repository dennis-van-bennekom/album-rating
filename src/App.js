import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Info from './Info';
import Rating from './Rating';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <Image />
          <Info />
        </div>
        <Rating />
      </div>
    );
  }
}

export default App;
