import Polyglot from 'node-polyglot'
import ru from './ru'
import eng from './eng'
import store from '../store'

const ENG = 'eng';
const RU = 'ru';

const polyglot = new Polyglot();

polyglot.setRuLocal = () => {
  polyglot.locale(RU);
  polyglot.extend(ru);
}
polyglot.setEngLocal = () => {
  polyglot.locale(ENG);
  polyglot.extend(eng);
}

switch(store.getState().locale){
  case ENG : polyglot.setEngLocal(); break;
  case RU :
    default : polyglot.setRuLocal(); break;
}

export default polyglot;
