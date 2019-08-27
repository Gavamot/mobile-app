import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import MaterialTable from 'material-table';

const [state, setState] = React.useState({
  columns: [
    { title: 'Id', field: 'id', render : rowData => '123' },
    { title: 'Name', field: 'Наименоваие' },
    { title: 'ParentId', field: 'parentId', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
  ],
  data: []
});

class DepartmentsCrud extends React.Component {

  render(props){
    return  <MaterialTable
      title="Подразделения"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
  />
  }
}
