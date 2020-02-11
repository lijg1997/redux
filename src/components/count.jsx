import React, { Component } from 'react';

export default class Count extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    this.setState({ number: number + value * 1 });
  };

  handleDecrease = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    this.setState({ number: number - value * 1 });
  };

  handleIncreaseOdd = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    if (number % 2 === 1) this.setState({ number: number + value * 1 });
  };

  handleIncreaseAsync = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    setTimeout(() => {
      this.setState({ number: number + value * 1 });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>数字为：{this.state.number}</h2>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.handleIncrease}>+</button>&nbsp;&nbsp;
        <button onClick={this.handleDecrease}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleIncreaseOdd}>increase if odd</button>&nbsp;&nbsp;
        <button onClick={this.handleIncreaseAsync}>increase async</button>
      </div>
    );
  }
}
