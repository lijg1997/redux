import { connect } from 'react-redux';

import Person from '../../components/person/person';

import { createAddPersonAction } from '../../redux/action_creators/person_action_creator';

export default connect(
  state => ({ persons: state.persons, number: state.number }),
  dispatch => ({
    addPerson: personObj => dispatch(createAddPersonAction(personObj))
  })
)(Person);
