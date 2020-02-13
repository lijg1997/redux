import { ADDPERSON } from '../../redux/action_type';
export const createAddPersonAction = personObj => ({ type: ADDPERSON, data: personObj });
