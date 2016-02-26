import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon,QueueAnim} from 'antd';
const RangePicker = DatePicker.RangePicker;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {slideMenu} from '../../action/actions';

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
        <QueueAnim>
          <Row key="outbox1">
            <Col span="24">
              <h1 className="floatleft">发件箱</h1>
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

const Outbox = React.createClass({
  componentDidMount() {
    const data={
      current: '2',
      openKeys: ['sub1']
    }
    this.props.slideMenu(data)
  },
  render() {
    return (
      <div>
        <Row>
          <Outboxcontent />
        </Row>
      </div>
    );
  }
});

function mapStateToProps(state) {
    return {
      current: state.smsApp.slidemenuactive.current,
      openKeys: state.smsApp.slidemenuactive.openKeys
    }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ slideMenu }, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(Outbox);
