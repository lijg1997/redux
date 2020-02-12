import React, { Component } from 'react';
import Count from './containers/count/count';
import Person from './containers/person/person';

export default class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Count />
        <br />
        <br />
        <br />
        <Person />
      </div>
    );
  }
}
