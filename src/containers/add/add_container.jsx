import { connect } from 'react-redux';
import Add from '../../components/add/add';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/action_creators/add_action_creator';

export default connect(
  state => ({ number: state.number, person: state.person }),
  dispatch => ({
    increment: value => dispatch(createIncrementAction(value)),
    decrement: value => dispatch(createDecrementAction(value)),
    incrementAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
  })
)(Add);
