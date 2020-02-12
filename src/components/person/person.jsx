import React, { Component } from 'react';

export default class Person extends Component {
  handleAddPerson = () => {
    const name = this.refs.name.value;
    const age = this.refs.age.value;
    this.props.addPerson({ name, age });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>
          总人数为：{this.props.personArr.length}，上方计数：{this.props.number}
        </h2>
        <input ref="name" type="text" placeholder="请输入您的姓名" />
        &nbsp;
        <input ref="age" type="text" placeholder="请输入您的年龄" />
        &nbsp;
        <button onClick={this.handleAddPerson}>提交</button>
        <ul>
          {this.props.personArr.map((item, index) => (
            <li key={index}>
              姓名：{item.name} 年龄：{item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
