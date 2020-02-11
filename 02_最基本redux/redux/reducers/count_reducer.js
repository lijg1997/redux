//引入设置的常用的常量
import { INCREMENT, DECREMENT } from '../action_type';

//默认暴露一个函数，这个函数是专门给count使用的reducer
export default function(previousState = 0, action) {
  console.log(previousState, action);
  //结构赋值action中的type，data；
  const { type, data } = action;
  let newState;
  //判断type的类型
  switch (type) {
    //如果type为increment，那么执行加法
    case INCREMENT:
      newState = previousState + data;
      return newState;
    //如果type为decrement，那么执行减法
    case DECREMENT:
      newState = previousState - data;
      return newState;
    //如果是第一次，那么就是初始化的previousState
    default:
      return previousState;
  }
}
