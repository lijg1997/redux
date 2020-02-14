import React, { Component } from 'react';

export default class Count extends Component {
  handleIncrement = () => {
    const { value } = this.refs.checkValue;
    this.props.increment(value * 1);
  };

  handleDecrement = () => {
    const { value } = this.refs.checkValue;
    this.props.decrement(value * 1);
  };

  handleIncrementOdd = () => {
    const { value } = this.refs.checkValue;
    const number = this.props.number;
    if (number % 2 === 1) this.props.increment(value * 1);
  };

  handleIncrementAsync = () => {
    const { value } = this.refs.checkValue;
    this.props.incrementAsync(value * 1, 2000);
  };

  render() {
    return (
      <div>
        <h2>
          当前计数为：{this.props.number} 下面总人数为：{this.props.persons.length}
        </h2>
        <select ref="checkValue">
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
