import React, { Component } from 'react';
import html2canvas from 'html2canvas';

import './Export.css';

class Export extends Component {
  export(e) {
    e.preventDefault();

    document.body.classList.add('hide-buttons');

    html2canvas(document.body, {
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