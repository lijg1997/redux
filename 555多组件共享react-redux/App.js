import React, { Component } from 'react';
import Add from './containers/add/add_container';
import Person from './containers/person/person_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Add />
        <br />
        <br />
        <br />
        <br />
        <Person />
      </div>
    );
  }
}
