import * as React from 'react';
import { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-header">
        <div className="container flex-between">
          <div className="header-left">
            <h6 className="app-title">todos</h6>
          </div>
          <div className="header-center">
            <a href="/" className="page-logo flex-centered">
              <img src="../../../assets/img/logo.png" alt="Logo"/>
            </a>
          </div>
          <div className="header-right">
            <img src="../../../assets/img/user-icon.png" alt="User Icon"/>
          </div>
        </div>
      </div>
    );
  }
}
