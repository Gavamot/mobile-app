export interface ICrudItem {
 id : number;
 name : string;
}

export class CrudState {
  public items : ICrudItem[] = [];  // ICrudItem[];
  public selectedItem? : ICrudItem; // : ICrudItem;
  public error? : string; //string
}
