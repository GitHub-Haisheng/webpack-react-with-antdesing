import React from 'react';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';

const App = React.createClass({
  render() {
    return (
      <div>
          <div className="topheader">
            <Topheader />
          </div>
          <div className="sidermenu">
            <Sidermenu openKeys={['']} current={''}  />
          </div>
          <div className="rightcontent">
              {this.props.children}
          </div>
      </div>
    );
  }
});
export default App;
