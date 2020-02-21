import { ADDPERSON } from '../action_types';
export default function(previousState = [{ name: 'LiJinGui', age: 23 }], action) {
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
