import React, { Component } from 'react';
//2. import { INCREMENT, DECREMENT } from '../../redux/action_type';
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/action_creators/count_action_creator';

export default class Count extends Component {
  // state = { number: 0 };

  handleIncrement = () => {
    const { value } = this.refs.selectNumber;
    this.props.store.dispatch(createIncrementAction(value * 1));
    //2. this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
    //1. const { number } = this.state;
    //1. this.setState({ number: number + value * 1 });
  };

  handleDecrement = () => {
    const { value } = this.refs.selectNumber;
    this.props.store.dispatch(createDecrementAction(value * 1));
    //2. this.props.store.dispatch({ type: DECREMENT, data: value * 1 });
    //1. const { number } = this.state;
    //1. this.setState({ number: number - value * 1 });
  };

  handleIncrementOdd = () => {
    const { value } = this.refs.selectNumber;
    //1. const { number } = this.state;
    //1. if (number % 2 === 1) this.setState({ number: number + value * 1 });
    const number = this.props.store.getState();
    //2. if (number % 2 === 1) this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
    if (number % 2 === 1) this.props.store.dispatch(createIncrementAction(value * 1));
  };

  handleIncrementAsync = () => {
    const { value } = this.refs.selectNumber;
    //1. const { number } = this.state;
    setTimeout(() => {
      //1. this.setState({ number: number + value * 1 });
      //2. this.props.store.dispatch({ type: INCREMENT, data: value * 1 });
      this.props.store.dispatch(createIncrementAction(value * 1));
    }, 400);
  };

  render() {
    return (
      <div>
        <h2>当前计数为：{this.props.store.getState()}</h2>
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
