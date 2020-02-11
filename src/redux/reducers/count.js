import { INCREMENT, DECREMENT } from '../action_types';
export default function(previousState = 10, action) {
  console.log(previousState, action);
  //解构赋值action对象身上的两个属性
  const { type, data } = action;
  //定义一个变量，用来在后面接收对应type的data
  let newState;
  //判断type的类型
  switch (type) {
    //如果type为increment，返回加法
    case INCREMENT:
      newState = previousState + data;
      return newState;
    //如果type为decrement，返回减法
    case DECREMENT:
      newState = previousState - data;
      return newState;
    //如果是第一次，返回初始状态的previousState;
    default:
      return previousState;
  }
}
