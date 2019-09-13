import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CrudActionCreatorGenerator from 'store/action-creators/CrudActionCreatorGenerator'
import CrudEntrys from 'store/CrudEntetys';
import store from 'store';
import { CrudState } from 'store/reducers/CrudModels';
import { connect } from 'react-redux'
import { TreeList, Editing, Column, ValidationRule, Lookup } from 'devextreme-react/tree-list';

const ActionCreator : CrudActionCreatorGenerator = new CrudActionCreatorGenerator(CrudEntrys.DEPARTMENT);

const popupOptions = {
  title: 'Employee Info',
  showTitle: true,
  width: 700,
  position: { my: 'top', at: 'top', of: window }
};

const expandedRowKeys = [1];

const style = {

}

class Department extends Component<CrudState> {

  componentWillMount(){
    store.dispatch(ActionCreator.getAllReq());
  }

  render() {

    const lookupData = {
      store: this.props.items,
      sort: 'name'
    };

    console.log(this.props);
    return (
      <div>
        <TreeList
          className=""
          columnAutoWidth={true}
          showRowLines={true}
          showBorders={true}
          keyExpr={'id'}
          parentIdExpr={'parentId'}
          defaultExpandedRowKeys={expandedRowKeys}
          dataSource={this.props.items}
         >
         <Editing allowUpdating={true}
                  allowDeleting={true} allowAdding={true} popup={popupOptions} mode={'popup'} />
          <Column dataField={'id'} caption={'id'}>
            <ValidationRule type={'required'} />
          </Column>
          <Column dataField={'name'} caption={'наименование'}>
            <ValidationRule type={'required'} />
          </Column>
          <Column visible={false} dataField={'parentId'} caption={'parentId'}>
              <Lookup dataSource={lookupData} valueExpr={'id'} displayExpr={'name'} />
              <ValidationRule type={'required'} />
          </Column>
        </TreeList>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { ...state.DEPARTMENT_crudReduser };
}

export default connect(mapStateToProps)(Department)
