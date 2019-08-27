import Department from "views/Catalog/Department";


export default class CrudEntetys{
  public static readonly DEPARTMENT : string = "DEPARTMENT";
  public Keys() : string[] {
    return [
      CrudEntetys.DEPARTMENT
    ]
  }
}
