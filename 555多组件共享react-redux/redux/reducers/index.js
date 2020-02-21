import { combineReducers } from 'redux';
import addReducer from './add_reducer';
import personReducer from './person_reducer';
export default combineReducers({
  number: addReducer,
  person: personReducer
});
