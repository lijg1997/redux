import { createStore, applyMiddleware } from 'redux';

//打天下的得力助手
import countReducer from './reducers/count_reducer';

//启动异步任务
import thunk from 'redux-thunk';

export default createStore(countReducer, applyMiddleware(thunk));
