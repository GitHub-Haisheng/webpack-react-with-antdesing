import React from 'react';
import { Menu, Breadcrumb } from 'antd';
import './topheader.less';
import { Link } from 'react-router'

const Topheader = React.createClass({
  render() {
    return (
      <div className="ant-layout-ceiling-demo">
        <div className="ant-layout-ceiling">
          <div className="ant-layout-wrapper">
            <ul className="right">
              <li><Link to={`/`}>桌面</Link></li>
              <li>欢迎您，</li>
              <li>XXXXXX</li>
              <li>|</li>
              <li>退出</li>
            </ul>
          </div>
        </div>
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo">
              <img src={require('../../images/logo.png')}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Topheader;
