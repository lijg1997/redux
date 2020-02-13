import { connect } from 'react-redux';
import Count from '../../components/count/count';
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/action_creators/count_action_creator';
export default connect(
  state => ({ number: state }),
  // {
  //   increment: createIncrementAction,
  //   decrement: createDecrementAction
  // }
  dispatch => ({
    increment: value => dispatch(createIncrementAction(value)),
    decrement: value => dispatch(createDecrementAction(value))
  })
)(Count);
