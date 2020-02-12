//引入react-redux中的connect方法
import { connect } from 'react-redux';
//引入count的UI组件
import Count from '../../components/count/count';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/action_creator/count';
//默认方式暴露加工或的count的容器组件
export default connect(
  state => ({ number: state.number }),
  // dispatch => ({
  //   increment: value => dispatch(createIncrementAction(value)),
  //   decrement: value => dispatch(createDecrementAction(value)),
  //   incrementAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
  // })
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count);
