import React from 'react';
import { Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setSing} from '../../action/actions';

const Topheader = React.createClass({
  handleClick() {
    this.props.setSing(false)
  },
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
              <li className="topheaderlink" onClick={this.handleClick}>退出</li>
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

function mapStateToProps(state) {
    return {
      singin: state.smsApp.setlogin.singin,
    }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSing }, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(Topheader);
