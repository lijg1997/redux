//引入创建store库的方法
import { createStore, applyMiddleware } from 'redux';

// 引入count的reducer, 在创建store时要传入;
// import count from './reducers/count';
//引入person的reducer
// import person from './reducers/person';

//引入总的reducers
import reducer from './reducers';

//引入redux-thunk用于异步编程
import thunk from 'redux-thunk';

//将store默认方式暴露出去
export default createStore(reducer, applyMiddleware(thunk));
