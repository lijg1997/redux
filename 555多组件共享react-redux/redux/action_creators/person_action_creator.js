import { ADDPERSON } from '../action_types';
export const createAddPersonAction = personObj => ({ type: ADDPERSON, data: personObj });
