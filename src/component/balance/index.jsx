import React from 'react';
import { Row,Col } from 'antd';
import EventEmitter from '../../common/EventEmitter';

const Balance = React.createClass({
  componentDidMount() {
    let data = {
      current: '13',
      openKeys: ['sub4']
    };
    EventEmitter.dispatch('menuActive', data);
  },
  componentWillUnmount: function(){
    EventEmitter.unSubscribe('changemenuActive');
  },
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="18">当前余额：96条</Col>
        </Row>
      </div>
    );
  }
});

export default Balance;
