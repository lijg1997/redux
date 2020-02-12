import { combineReducers } from 'redux';

import count from './count';
import person from './person';

export default combineReducers({
  number: count,
  personArr: person
});
