import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入store，redux建议在index.js里引入
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
  //在provider中传递store，就不需要一层一层自己去传递，而是底层帮你传了
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
