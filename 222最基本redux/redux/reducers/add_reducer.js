import { INCREMENT, DECREMENT } from '../action_types';
export default function(previousState = 520, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case INCREMENT:
      newState = previousState + data;
      return newState;

    case DECREMENT:
      newState = previousState - data;
      return newState;

    default:
      return previousState;
  }
}
