import React, { Component } from 'react';
import Count from './components/count/count';

export default class App extends Component {
  render() {
    // console.log(this.props);
    return <Count store={this.props.store} />;
  }
}
