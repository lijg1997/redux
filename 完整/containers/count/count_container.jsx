import { connect } from 'react-redux';
import Count from '../../components/count/count';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/action_creators/count_action_creator';

export default connect(
  store => ({
    number: store.number,
    persons: store.persons
  }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count);
