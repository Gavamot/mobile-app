import axios from "axios"

const Fake = "http://localhost:2000";
const CrudPrefix = Fake +  "/CRUD/"; // Set empty string for

export class CrudApi {

  constructor(url){
    this.baseUrl = `${CrudPrefix}/${url}`;
    this.idUrl = (id) => `${this.baseUrl}/${id}`;
  }

  getAllAsync(){
    return axios.get(this.baseUrl);
  }

  getAsync(id){
    return axios.get(this.idUrl(id));
  }

  addAsync(item){
    return axios.post(this.baseUrl, item);
  }

  updateAsync(item){
    return axios.update(this.idUrl(item.id), item);
  }

  deleteAsync(id){
    return axios.delete(this.idUrl(id))
  }
}
