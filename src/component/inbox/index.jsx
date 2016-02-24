import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon,Input} from 'antd';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';


const dataSource = [{
  key: '1',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
},{
  key: '2',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
},{
  key: '3',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
},{
  key: '4',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
},{
  key: '5',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
},{
  key: '6',
  hfsjhm: '11111111132',
  dxnr: '文字短信',
  hfsj: '2015-02-16 11:12:30',
  zt:'succsee',
  bz: '无'
}];

const columns = [{
  title: '序号',
  dataIndex: 'key',
  key: 'key',
}, {
  title: '回复手机号码',
  dataIndex: 'hfsjhm',
  key: 'hfsjhm',
}, {
  title: '短信内容',
  dataIndex: 'dxnr',
  key: 'dxnr',
},{
  title: '回复时间',
  dataIndex: 'hfsj',
  key: 'hfsj',
},{
  title: '状态',
  dataIndex: 'zt',
  key: 'zt',
},{
  title: '备注',
  dataIndex: 'bz',
  key: 'bz',
}];

const Outboxcontent = React.createClass({
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="8"><h1>收件箱</h1></Col>
          <Col style={{paddingTop:'20px'}} span="16">
            手机号码<Input style={{width:'120px'}} />
            开始时间<DatePicker  format="yyyy/MM/dd HH:mm:ss" />
            结束时间<DatePicker  format="yyyy/MM/dd HH:mm:ss" />
          <Button type="ghost">查询</Button>
            <Button type="ghost">返回</Button>
          </Col>
        </Row>
        <Row>
          <Table dataSource={dataSource} columns={columns} size="middle" />
        </Row>
      </div>
    );
  }
});

const Inbox = React.createClass({
  render() {
    return (
      <div>
          <Outboxcontent />
      </div>
    );
  }
});

export default Inbox;
