import { createStore } from 'redux';
import addReducer from './reducers/add_reducer';
export default createStore(addReducer);
