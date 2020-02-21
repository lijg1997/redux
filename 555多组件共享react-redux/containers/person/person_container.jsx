import { connect } from 'react-redux';
import Person from '../../components/person/person';
import { createAddPersonAction } from '../../redux/action_creators/person_action_creator';
export default connect(
  state => ({ person: state.person, number: state.number }),
  dispatch => ({
    addPerson: (name, age) => dispatch(createAddPersonAction({ name, age }))
  })
)(Person);
