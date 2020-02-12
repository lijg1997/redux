//引入UI组件Count
import Count from '../components/count';
//引入react-redux中的connect
import { connect } from 'react-redux';
//引入action_creator
import {
  createIncrementAction,
  createDecrementAction
} from '../redux/action_creators/count_action_creator';

//默认暴露
// 经过调用connect函数所返回的函数创建的新的UI组件的容器组件
export default connect(
  () => ({ value: createIncrementAction(), a: createDecrementAction() }),
  () => ({})
)(Count);
