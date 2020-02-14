import { ADDPERSON } from '../action_type';
export default function(previousState = [{ name: 'liJinGui', age: 23 }], action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case ADDPERSON:
      newState = [data, ...previousState];
      return newState;

    default:
      return previousState;
  }
}
