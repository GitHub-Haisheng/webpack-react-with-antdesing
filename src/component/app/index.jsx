import React from 'react';
import Sidermenu from '../menu/index';
import {QueueAnim} from 'antd';
import Topheader from '../topheader/index';

const App = React.createClass({
  render() {
    return (
      <div>
          <div className="topheader">
            <Topheader />
          </div>
          <div className="sidermenu" >
            <Sidermenu  />
          </div>
          <div className="rightcontent">
            {this.props.children}
          </div>
      </div>
    );
  }
});
export default App;
