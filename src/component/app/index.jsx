import React from 'react';
import { QueueAnim} from 'antd';
import { connect } from 'react-redux';

import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';
import Login from '../login/index';

const App = React.createClass({
  render() {
    const {singin} = this.props;
    if(singin){
      return (
        <div>
          <div className="topheader">
            <Topheader />
          </div>
          <div className="sidermenu" >
            <Sidermenu />
          </div>
          <div className="rightcontent">
            {this.props.children}
          </div>
        </div>
      )
      }else{
        return (<Login />)
      }
    }
});

function mapStateToProps(state) {
    return {
      singin: state.smsApp.setlogin.singin,
    }
};

export default connect(mapStateToProps)(App);
