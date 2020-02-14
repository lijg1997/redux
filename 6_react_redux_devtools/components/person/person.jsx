import React, { Component } from 'react';

export default class Person extends Component {
  handleAddPerson = () => {
    const name = this.refs.name.value;
    const age = this.refs.age.value;
    if (!name.trim() || !age.trim()) {
      return;
    }
    this.props.addPerson({ name, age });
    this.refs.name.value = '';
    this.refs.age.value = '';
  };

  render() {
    return (
      <div>
        <h2>
          总人数为：{this.props.persons.length} 上面的计数为：{this.props.number}
        </h2>
        <input ref="name" type="text" placeholder="请输入您的姓名" />
        &nbsp;
        <input ref="age" type="text" placeholder="请输入您的年龄" />
        &nbsp;
        <button onClick={this.handleAddPerson}>提交</button>
        <ul>
          {this.props.persons.map((person, index) => (
            <li key={index}>
              姓名：{person.name} 年龄：{person.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
