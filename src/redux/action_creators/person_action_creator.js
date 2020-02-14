import { ADDPERSON } from '../action_types';
const createAddPersonAction = personObj => ({ type: ADDPERSON, data: personObj });
export { createAddPersonAction };
