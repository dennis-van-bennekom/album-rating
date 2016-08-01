import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {rating: [1]}
  }

  addRow(e) {
    e.preventDefault();

    let rating = this.state.rating.slice();
    rating.push(1);

    this.setState({
      rating: rating
    });
  }

  removeRow(e, index) {
    e.preventDefault();

    let rating = this.state.rating.slice();
    rating.splice(index, 1);

    this.setState({
      rating: rating
    });
  }

  setRating(e, column, number) {
    console.log(e);

    let rating = this.state.rating.slice();
    rating[column] = number + 1;

    this.setState({
      rating: rating
    });
  }

  renderBlock(fill, column, key) {
    return <div
      key={key}
      className={(fill ? 'fill' : 'empty')}
      onClick={(e) => this.setRating(e, column, key)}
    ></div>
  }

  renderColumn(rating, key) {
    let blocks = [];

    for (let i = 0; i < 10; i++) {
      const fill = (i < rating);

      blocks.push(this.renderBlock(fill, key, i));
    }

    return (
      <div key={key} className="column">
        <button
          className="delete"
          onClick={(e) => this.removeRow(e, key)}>
          x
        </button>
        <div className="number">{key + 1}</div>
        {blocks}
      </div>
    );
  }

  renderAverage() {
    const rating = this.state.rating;

    const sum = rating.reduce((sum, value) => {
      return sum + value;
    }, 0);

    const average = (sum / rating.length).toFixed(1);

    return (
      <div className="average">
        {average}
        <div className="average-label">Average score</div>
      </div>
    );
  }

  renderRating() {
    return this.state.rating.map((rating, index) => {
      return this.renderColumn(rating, index);
    })
  }

  render() {
    return (
      <div className="Rating">
        <div className="chart">
          {this.renderRating()}
          <button
            className="add-row"
            onClick={(e) => this.addRow(e)}>
            Add row
          </button>
        </div>

        <div className="score">
          {this.renderAverage()}

          <div className="average">
            <input type="text" />
            <div className="average-label">Overall score</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
