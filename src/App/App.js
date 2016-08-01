import React, { Component } from 'react';
import './App.css';

import Image from '../Image/Image';
import Info from '../Info/Info';
import Rating from '../Rating/Rating';
import Export from '../Export/Export';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <Image />
          <Info />
        </div>
        <div className="row">
          <Rating />
        </div>
        <div className="row">
          <Export />
        </div>
      </div>
    );
  }
}

export default App;
