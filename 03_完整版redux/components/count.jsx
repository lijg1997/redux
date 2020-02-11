import React, { Component } from 'react';
import {
  createIncrementAction,
  createDecrementAction
} from '../redux/action_creators/count_action_creator';

export default class Count extends Component {
  handleIncrease = () => {
    const { value } = this.refs.selectNumber;
    const { dispatch } = this.props.store;
    dispatch(createIncrementAction(value * 1));
  };

  handleDecrease = () => {
    const { value } = this.refs.selectNumber;
    const { dispatch } = this.props.store;
    dispatch(createDecrementAction(value * 1));
  };

  handleIncreaseOdd = () => {
    const { value } = this.refs.selectNumber;
    const { getState, dispatch } = this.props.store;
    if (getState() % 2 === 1) dispatch(createIncrementAction(value * 1));
  };

  handleIncreaseAsync = () => {
    const { value } = this.refs.selectNumber;
    const { dispatch } = this.props.store;
    setTimeout(() => {
      dispatch(createIncrementAction(value * 1));
    }, 1000);
  };

  render() {
    const { getState } = this.props.store;
    return (
      <div>
        <h2>数字为：{getState()}</h2>
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
