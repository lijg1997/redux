import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from '../../redux/action_types';

export default class Add extends Component {
  state = {
    number: 0
  };

  handleIncrement = () => {
    const { value } = this.refs.selectValue;
    // const { number } = this.state;
    // this.setState({ number: number + value * 1 });
    this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
  };

  handleDecrement = () => {
    const { value } = this.refs.selectValue;
    // const { number } = this.state;
    // this.setState({ number: number - value * 1 });
    this.props.store.dispatch({ type: DECREMENT, data: value * 1 });
  };

  handleIncrementOdd = () => {
    const { value } = this.refs.selectValue;
    const number = this.props.store.getState();
    if (number % 2 === 1) this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
  };

  handleIncrementAsync = () => {
    const { value } = this.refs.selectValue;
    // const { number } = this.state;
    setTimeout(() => {
      // this.setState({ number: number + value * 1 });
      this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
    }, 300);
  };

  render() {
    return (
      <div>
        <h2>当前计数器为：{this.props.store.getState()}</h2>
        <select ref="selectValue">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.handleIncrement}>+</button>&nbsp;&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleIncrementOdd}>increment if odd</button>&nbsp;&nbsp;
        <button onClick={this.handleIncrementAsync}>increment async</button>
      </div>
    );
  }
}
