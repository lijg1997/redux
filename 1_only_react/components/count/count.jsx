import React, { Component } from 'react';

export default class Count extends Component {
  state = { number: 0 };

  handleIncrement = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    this.setState({ number: number + value * 1 });
  };

  handleDecrement = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    this.setState({ number: number - value * 1 });
  };

  handleIncrementOdd = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    if (number % 2 === 1) this.setState({ number: number + value * 1 });
  };

  handleIncrementAsync = () => {
    const { value } = this.refs.selectNumber;
    const { number } = this.state;
    setTimeout(() => {
      this.setState({ number: number + value * 1 });
    }, 400);
  };

  render() {
    return (
      <div>
        <h2>当前计数为：{this.state.number}</h2>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.handleIncrement}>+</button>&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;
        <button onClick={this.handleIncrementOdd}>increment if odd</button>&nbsp;
        <button onClick={this.handleIncrementAsync}>increment async</button>
      </div>
    );
  }
}
