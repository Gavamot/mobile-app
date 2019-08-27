import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { filter, mapTo } from 'rxjs/operators';

export default class BrigadePanel extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> {this.constructor.name}
          </div>
          <div className="card-body">
          </div>
        </div>
      </div>
    );
  }
}
