export default class Action {

  constructor(type : string, payload : any = null){
    this.type = type;
    this.payload = payload;
  }

  public type: string = "";
  public payload: any = null;
}
