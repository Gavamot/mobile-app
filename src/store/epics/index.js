import { combineEpics } from 'redux-observable';
import crudEpic from './crudEpic'

const rootEpic = combineEpics(
  crudEpic
);

export default rootEpic;
