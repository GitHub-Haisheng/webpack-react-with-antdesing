import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon, Input,QueueAnim} from 'antd';
import EventEmitter from '../../common/EventEmitter';


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
        <QueueAnim>
        <Row key="status1">
          <Col span="24">
            <h1 className="floatleft">状态查询</h1>
            <div className="floatright">
              <lable>手机号码<input style={{ width: 120,display:'inline' }} className="ant-input" value={'手机号码'} /></lable>
              <DatePicker  style={{ width: 184 }}  />
              <Button type="ghost">查询</Button>
            </div>
          </Col>
        </Row>
        <Row key="status2">
          <Table dataSource={dataSource} columns={columns} size="middle" />
        </Row>
      </QueueAnim>
      </div>
    );
  }
});


const Status = React.createClass({
  componentDidMount() {
    let data = {
      current: '4',
      openKeys: ['sub1']
    };
    EventEmitter.dispatch('menuActive', data);
	},
  componentWillUnmount: function(){
		EventEmitter.unSubscribe('changemenuActive');
	},
  render() {
    return (
      <div>
          <Statuscontent />
      </div>
    );
  }
});

export default Status;
