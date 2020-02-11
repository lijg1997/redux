import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from '../../redux/action_types';

export default class Count extends Component {
  handleIncrement = () => {
    const { value } = this.refs.selectValue;
    this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
  };

  handleDecrement = () => {
    const { value } = this.refs.selectValue;
    this.props.store.dispatch({ type: DECREMENT, data: value * 1 });
  };

  handleIncrementIfOdd = () => {
    const { value } = this.refs.selectValue;
    const number = this.props.store.getState();
    if (number % 2 === 1) this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
  };

  handleIncrementAsync = () => {
    const { value } = this.refs.selectValue;
    setTimeout(() => {
      this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
    }, 600);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>当前的数字为：{this.props.store.getState()}</h2>
        <select ref="selectValue">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.handleIncrement}>+</button>&nbsp;&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleIncrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
        <button onClick={this.handleIncrementAsync}>increment async</button>
      </div>
    );
  }
}
