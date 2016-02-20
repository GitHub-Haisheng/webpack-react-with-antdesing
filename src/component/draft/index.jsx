import React from 'react';
import { Row,Col } from 'antd';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';

const Draft = React.createClass({
  render() {
    return (
      <div>
        <Topheader />
        <Row>
          <Col span="5"><Sidermenu /></Col>
          <Col style={{paddingTop:'20px'}} span="18">常用短语</Col>
        </Row>
      </div>
    );
  }
});

export default Draft;
