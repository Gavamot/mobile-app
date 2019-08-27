import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CrudActionCreatorGenerator from 'store/action-creators/CrudActionCreatorGenerator'
import CrudEntrys from 'store/CrudEntetys';
import store from 'store';
import { CrudState } from 'store/reducers/CrudModels';
import { connect } from 'react-redux'

const ActionCreator : CrudActionCreatorGenerator = new CrudActionCreatorGenerator(CrudEntrys.DEPARTMENT);
class Department extends Component<CrudState> {

  render() {
    let items;
    if(this.props.items){
      items = this.props.items.map(x=>
        <div key={`crud_department_${x.id}`}>
          <div>{x.id}</div>
          <div>{x.name}</div>
        </div>
      );
    }

    return (
      <div className="animated fadeIn">
        <button type="reset" onClick={ e => store.dispatch(ActionCreator.getAllReq()) } >Получить данные</button>
        {items}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { ...state.DEPARTMENT_crudReduser };
}

export default connect(mapStateToProps)(Department)
