import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon,Input,QueueAnim} from 'antd';
const RangePicker = DatePicker.RangePicker;
import EventEmitter from '../../common/EventEmitter';



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

const Inboxcontent = React.createClass({
  render() {
    return (
      <div>
        <QueueAnim>
          <Row key="inbox1">
            <Col span="24">
              <h1 className="floatleft">收件箱</h1>
              <div className="floatright">
                <lable>手机号码<input style={{ width: 120,display:'inline' }} className="ant-input" defaultValue={'手机号码'} /></lable>
                <RangePicker  style={{ width: 184 }}  />
              <Button type="ghost">查询</Button>
            </div>
          </Col>
        </Row>
        <Row key="inbox2">
          <Table dataSource={dataSource} columns={columns} size="middle" />
        </Row>
      </QueueAnim>
      </div>
    );
  }
});

const Inbox = React.createClass({
  componentDidMount() {
    let data = {
      current: '3',
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
        <Inboxcontent />
      </div>
    );
  }
});

export default Inbox;
