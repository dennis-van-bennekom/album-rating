import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <input id="artist" type="text" />
        <label htmlFor="artist">Artist</label>

        <input id="album" type="text" />
        <label htmlFor="album">Album</label>
      </div>
    );
  }
}

export default Info;
