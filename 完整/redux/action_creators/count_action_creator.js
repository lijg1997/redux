import { INCREMENT, DECREMENT } from '../action_types';
const createIncrementAction = value => ({ type: INCREMENT, data: value });
const createDecrementAction = value => ({ type: DECREMENT, data: value });
const createIncrementAsyncAction = (value, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncrementAction(value));
    }, time);
  };
};
export { createIncrementAction, createDecrementAction, createIncrementAsyncAction };
