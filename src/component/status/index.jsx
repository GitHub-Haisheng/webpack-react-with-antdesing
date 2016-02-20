import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon, Input} from 'antd';
import Sidermenu from '../menu/index';
import Topheader from '../topheader/index';


const dataSource = [{
  key: '1',
  px: '胡彦斌',
  xh: '11111111132',
  hm: '2',
  nr: '1',
  lb: '文字短信',
  fszt: '2015-02-16 11:12:30',
  hzbz:'succsee',
  hzsj: '无'
},{
  key: '2',
  px: '胡彦斌',
  xh: '11111111132',
  hm: '2',
  nr: '1',
  lb: '文字短信',
  fszt: '2015-02-16 11:12:30',
  hzbz:'succsee',
  hzsj: '无'
},{
  key: '3',
  px: '胡彦斌',
  xh: '11111111132',
  hm: '2',
  nr: '1',
  lb: '文字短信',
  fszt: '2015-02-16 11:12:30',
  hzbz:'succsee',
  hzsj: '无'
},{
  key: '4',
  px: '胡彦斌',
  xh: '11111111132',
  hm: '2',
  nr: '1',
  lb: '文字短信',
  fszt: '2015-02-16 11:12:30',
  hzbz:'succsee',
  hzsj: '无'
},{
  key: '5',
  px: '胡彦斌',
  xh: '11111111132',
  hm: '2',
  nr: '1',
  lb: '文字短信',
  fszt: '2015-02-16 11:12:30',
  hzbz:'succsee',
  hzsj: '无'
}];

const columns = [{
  title: '批次',
  dataIndex: 'pc',
  key: 'pc',
}, {
  title: '序号',
  dataIndex: 'xh',
  key: 'xh',
}, {
  title: '号码',
  dataIndex: 'hm',
  key: 'hm',
},{
  title: '内容',
  dataIndex: 'nr',
  key: 'nr',
},{
  title: '类别',
  dataIndex: 'lb',
  key: 'lb',
},{
  title: '发送状态',
  dataIndex: 'fszt',
  key: 'fszt',
},{
  title: '回执标志',
  dataIndex: 'hzbz',
  key: 'hzbz',
},{
  title: '回执时间',
  dataIndex: 'hzsj',
  key: 'hzsj',
}];

const Statuscontent = React.createClass({
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="8"><h1>状态查询</h1></Col>
          <Col style={{paddingTop:'20px'}} span="10" offset="6">
            号码<Input style={{width:'120px'}} />
            时间<DatePicker  format="yyyy/MM/dd HH:mm:ss" />
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


const Status = React.createClass({
  render() {
    return (
      <div>
        <Topheader />
        <Row>
          <Col span="5"><Sidermenu /></Col>
          <Col style={{paddingTop:'20px'}} span="18"><Statuscontent /></Col>
        </Row>
      </div>
    );
  }
});

export default Status;
