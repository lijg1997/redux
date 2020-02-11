//引入redux中创建store仓库
import { createStore } from 'redux';

//引入专门用于count组件的reducer
import countReducer from './reducers/count_reducer';

//默认暴露store
//在创建store时，规定必须要先有一个reducer传入
export default createStore(countReducer);
