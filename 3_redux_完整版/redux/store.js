import { createStore } from 'redux';

//打天下的得力助手
import countReducer from './reducers/count_reducer';

export default createStore(countReducer);
