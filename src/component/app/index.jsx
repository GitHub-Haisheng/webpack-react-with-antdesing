import React from 'react';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';


const App = React.createClass({
  getInitialState() {
    return {
      current: '7',
      openKeys: ['sub2']
    };
  },
  changemenuActive: function(a,b){
		this.setState({
      current: a,
			openKeys: b
		});
	},
  childContextTypes: {
    changemenuActive:React.PropTypes.any
	},
	getChildContext: function(){
		return {
			changemenuActive:this.changemenuActive
		}
	},
  render() {
    return (
      <div>
          <div className="topheader">
            <Topheader />
          </div>
          <div className="sidermenu" >
            <Sidermenu current={this.state.current} openKeys={this.state.openKeys} />
          </div>
          <div className="rightcontent">
            {this.props.children}
          </div>
      </div>
    );
  }
});
export default App;
