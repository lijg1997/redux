import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入store，redux建议在index.js里引入，再通过组件传属性props的方式一步一步的传到要用store的组件中
import store from './redux/store';
ReactDOM.render(<App store={store} />, document.getElementById('root'));

//react的state属性，当它的值发生变化的时候，会实时刷新页面
// 但是store中的值发生变化的时候，并不能实时出发页面的刷新，所以要调用store中的subscribe方法，
// 当store中的值发生变化的时候，就会触发subscribe方法的调用，然后在重新渲染页面
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
});
