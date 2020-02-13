import { INCREMENT, DECREMENT } from '../action_type';
export default function(previousState = 5201314, action) {
  const { type, data } = action;
  let newState; //reducer规定，不能修改本身的数据，也就是规定reducer函数必须是一个纯函数
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
