import React, { Component } from 'react';
import html2canvas from 'html2canvas';

import './Export.css';

class Export extends Component {
  export(e) {
    e.preventDefault();

    const $app = document.getElementsByClassName('App')[0];

    document.body.classList.add('hide-buttons');
    window.scrollTo(0, 0); // Make sure we capture everything

    html2canvas($app, {
      width: $app.clientWidth,
      height: $app.clientHeight,
      onrendered: function(canvas) {
        window.open(canvas.toDataURL('image/png'));

        document.body.classList.remove('hide-buttons');
      }
    });
  }

  render() {
    return (
      <div className="Export">
        <button onClick={(e) => this.export(e)}>Export</button>
      </div>
    );
  }
}

export default Export;
