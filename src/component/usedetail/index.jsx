import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon,QueueAnim} from 'antd';
const RangePicker = DatePicker.RangePicker;
import EventEmitter from '../../common/EventEmitter';

const dataSource = [{
  key: '1',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '2',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '3',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '4',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '5',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '6',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '7',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
},{
  key: '8',
  dxnr: '胡彦斌',
  mbhm: '11111111132',
  hmgs: '2',
  dxts: '1',
  fslx: '文字短信',
  fssj: '2015-02-16 11:12:30',
  fszt:'succsee',
  qt: '无'
}];

const columns = [{
  title: '序号',
  dataIndex: 'key',
  key: 'key',
}, {
  title: '短信内容',
  dataIndex: 'dxnr',
  key: 'dxnr',
}, {
  title: '目标号码',
  dataIndex: 'mbhm',
  key: 'mbhm',
},{
  title: '号码个数',
  dataIndex: 'hmgs',
  key: 'hmgs',
},{
  title: '短信条数',
  dataIndex: 'dxts',
  key: 'dxts',
},{
  title: '发送类型',
  dataIndex: 'fslx',
  key: 'fslx',
},{
  title: '发送时间',
  dataIndex: 'fssj',
  key: 'fssj',
},{
  title: '发送状态',
  dataIndex: 'fszt',
  key: 'fszt',
},{
  title: '其他',
  dataIndex: 'qt',
  key: 'qt',
}];

const Usedetailcontent = React.createClass({
  render() {
    return (
      <div>
        <QueueAnim>
          <Row key="outbox1">
            <Col span="24">
              <h1 className="floatleft">充值/消费 明细</h1>
              <div className="floatright">
                <RangePicker  style={{ width: 184 }}  />
                <Button type="ghost">查询</Button>
              </div>
            </Col>
          </Row>
          <Row key="outbox2">
            <QueueAnim>
              <Table dataSource={dataSource} columns={columns} size="middle" />
            </QueueAnim>
          </Row>
        </QueueAnim>
      </div>
    );
  }
});

const Usedetail = React.createClass({
  componentDidMount() {
    let data = {
      current: '16',
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
          <Usedetailcontent />
        </Row>
      </div>
    );
  }
});

export default Usedetail;
