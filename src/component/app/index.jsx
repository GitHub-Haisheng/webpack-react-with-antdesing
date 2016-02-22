import React from 'react';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';

const App = React.createClass({
  getInitialState() {
    return {
      current: '1',
      openKeys: ['sub1']
    };
  },
  render() {
    return (
      <div>
          <div className="topheader">
            <Topheader />
          </div>
          <div className="sidermenu">
            <Sidermenu openKeys={this.state.openKeys} current={this.state.current}  />
          </div>
          <div className="rightcontent">
              {this.props.children}
          </div>
      </div>
    );
  }
});
export default App;
