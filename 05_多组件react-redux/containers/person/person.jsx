import { connect } from 'react-redux';
import Person from '../../components/person/person';
import { createAddPersonAction } from '../../redux/action_creator/person';

export default connect(
  state => ({
    personArr: state.personArr,
    number: state.number
  }),
  // dispatch => ({
  //   addPerson: personObj => dispatch(createAddPersonAction(personObj))
  // })
  { addPerson: createAddPersonAction }
)(Person);
