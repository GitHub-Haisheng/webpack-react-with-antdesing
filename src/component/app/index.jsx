import React from 'react';
import {QueueAnim} from 'antd';

import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';

const App = React.createClass({
  render() {
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
    );
  }
});

export default App;
