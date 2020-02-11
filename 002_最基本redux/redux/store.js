//引入创建store库的方法
import { createStore } from 'redux';
//引入reducer,在创建store时要传入
import count from './reducers/count';
//将store默认方式暴露出去
export default createStore(count);
