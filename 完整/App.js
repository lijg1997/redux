import React, { Component } from 'react';
import Count from './containers/count/count_container';
import Person from './containers/person/person_container';
// import Count from './components/count/count';
// import Person from './components/person/person';

export default class App extends Component {
  render() {
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
