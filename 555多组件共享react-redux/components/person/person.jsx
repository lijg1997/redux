import React, { Component } from 'react';

export default class Person extends Component {
  handleAddPerson = () => {
    const name = this.refs.name.value;
    const age = this.refs.age.value;
    this.props.addPerson(name, age);
  };
  render() {
    const { person, number } = this.props;
    return (
      <div>
        <h2>
          当前总人数为：{person.length} 上方计数为：{number}
        </h2>
        <input ref="name" type="text" placeholder="请输入您的姓名" />
        &nbsp;&nbsp;
        <input ref="age" type="text" placeholder="请输入您的年龄" />
        &nbsp;&nbsp;
        <button onClick={this.handleAddPerson}>提交</button>
        <ul>
          {person.map((item, index) => (
            <li key={index}>
              姓名为：{item.name} 年龄为：{item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
