import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CrudActionCreatorGenerator from 'store/action-creators/CrudActionCreatorGenerator'
import CrudEntrys from 'store/CrudEntetys'
import store from 'store';


export default class DeviceConnection extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> {this.constructor.name}
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}
