enum Commands {
  REQ = "REQ",
  OK = "OK",
  ERR = "ERR",
  CANCEL = "CANCEL"
}

enum CrudActions{
  GET = "GET",
  GET_ALL = "GET_ALL",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

export default class CrudActionGenerator {

  private name: string;

   public GET_ALL_REQ: string;
   public GET_ALL_OK: string;
   public GET_ALL_ERR: string;
   public GET_ALL_CANCEL: string;

   public GET_REQ: string;
   public GET_OK: string;
   public GET_ERR: string;
   public GET_CANCEL: string;
   
  constructor(name : string) {

    this.name = name;

    this.GET_ALL_REQ = this.generate(CrudActions.GET_ALL, Commands.REQ);
    this.GET_ALL_OK = this.generate(CrudActions.GET_ALL, Commands.OK);
    this.GET_ALL_ERR = this.generate(CrudActions.GET_ALL, Commands.ERR);
    this.GET_ALL_CANCEL = this.generate(CrudActions.GET_ALL, Commands.CANCEL);

    this.GET_REQ = this.generate(CrudActions.GET, Commands.REQ);
    this.GET_OK = this.generate(CrudActions.GET, Commands.OK);
    this.GET_ERR = this.generate(CrudActions.GET, Commands.ERR);
    this.GET_CANCEL = this.generate(CrudActions.GET, Commands.CANCEL);
  }

  private generate(crudAction, command) : string {
    return `${crudAction}_${this.name}_${command}`
  }

}
