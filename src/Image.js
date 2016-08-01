import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {image: ''};
  }

  handleImageChange(e) {
    const input = e.currentTarget;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.setState({image: e.target.result});
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  renderForm() {
    return (
      <div className="upload">
        <label htmlFor="image">Upload</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => this.handleImageChange(e)}
        />
      </div>

    );
  }

  renderImage() {
    return (
      <img src={this.state.image} alt="Album cover" />
    );
  }

  render() {
    const className = 'Image ' + (!this.state.image ? 'no-image' : '');

    return (
      <div className={className}>
        { this.state.image ?
          this.renderImage() :
          ''
        }

        {this.renderForm()}
      </div>
    );
  }
}

export default Image;
