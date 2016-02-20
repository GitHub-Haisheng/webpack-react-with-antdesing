import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon} from 'antd';


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

const Outboxcontent = React.createClass({
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="8"><h1>发件箱</h1></Col>
          <Col style={{paddingTop:'20px'}} span="12" offset="4">
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

const Outbox = React.createClass({
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="18"><Outboxcontent /></Col>
        </Row>
      </div>
    );
  }
});

export default Outbox;
