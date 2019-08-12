import CrudApi from './CrudApi'

class DepartmentsApi {
    constructor(){
      this.crudApi = new CrudApi("Departments");
    }
}

const departmentsApi = new DepartmentsApi();

export default departmentsApi;

