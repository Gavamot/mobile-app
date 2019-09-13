import Crud from '../actions/CrudActionGenerator'
import Action from '../actions/Action'

const generateAction = (type : string, payload?) => { return { type, payload} };

export default class CrudActionCreatorGenerator {

  private name: string;
  private crud : Crud;
  constructor(name : string) {
    this.name = name;
    this.crud = new Crud(name);
  }

  public getAllReq() { return generateAction(this.crud.GET_ALL_REQ); }
  public getAllOk(payload)  { return generateAction(this.crud.GET_ALL_OK, payload); }
  public getAllCancel() { return generateAction(this.crud.GET_ALL_CANCEL); }


}
