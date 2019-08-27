import { combineReducers } from "redux";
import Action from "../actions/Action";
import CrudActionGenerator from '../actions/CrudActionGenerator'
import CrudEntetys from '../CrudEntetys'
import { CrudState } from "./CrudModels";

const entetys = new CrudEntetys().Keys();

const redusers = {};
entetys.forEach(entety => {

  const crud = new CrudActionGenerator(entety);

  redusers[`${entety}_crudReduser`] =
   (state = new CrudState, action : Action) => {
    let newState = new CrudState;
    switch(action.type)
    {
        case crud.GET_ALL_REQ :
          return newState;
        case crud.GET_ALL_OK :
          newState.items = action.payload;
          return newState;
        case crud.GET_ALL_ERR :
          newState.error = action.payload;
          return newState;
        default :
          return state;
    }
  };

  redusers[`${entety}_crudFetchingReduser`] =
   (state = false, action) => {
    switch(action.type){
      case crud.GET_ALL_REQ :
        return true;
      case crud.GET_ALL_OK:
      case crud.GET_ALL_ERR:
      case crud.GET_ALL_CANCEL:
        return false;
      default:
        return state;
    }
  }
});

export default combineReducers(redusers);
