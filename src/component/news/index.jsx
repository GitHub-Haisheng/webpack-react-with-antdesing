import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Row,Col,Button,Table, Icon,Modal} from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {slideMenu} from '../../action/actions';

const dataSource = [{
  key: '1',
  ggmc:'温馨提示',
  ggnr:'大家好这是温馨提示',
  sj:'2016-03-01',
  zz:'管理员',
  bz:'无'
},{
  key: '2',
  ggmc:'放假公告',
  ggnr:'大家好这是放假公告',
  sj:'2016-02-26',
  zz:'管理员',
  bz:'无'
}];

const columns = [{
  title: '序号',
  dataIndex: 'key',
  key: 'key',
}, {
  title: '公告名称',
  dataIndex: 'ggmc',
  key: 'ggmc',
}, {
  title: '公告内容',
  dataIndex: 'ggnr',
  key: 'mbhm',
  render(text) {
    return <a href="#">{text}</a>;
  }
},{
  title: '时间',
  dataIndex: 'sj',
  key: 'sj',
},{
  title: '作者',
  dataIndex: 'zz',
  key: 'zz',
},{
  title: '备注',
  dataIndex: 'bz',
  key: 'bz',
}];

const Newscontent = React.createClass({
  getInitialState() {
    return {
      visible: false,
      modal_title:'',
      modal_text:'',
      modal_data:'',
      modal_admin:'',
      modal_remark:''
    };
  },
  handleOk() {
    this.setState({
      visible: false
    });
  },
  handleCancel() {
    this.setState({
      visible: false
    });
  },
  onRowClick(record, index) {
    this.setState({
      visible: true,
      modal_title:record.ggmc,
      modal_text:record.ggnr,
      modal_data:record.sj,
      modal_admin:record.zz,
      modal_remark:record.bz,
    });
  },
  render() {
    return (
      <div>
        <Modal title={this.state.modal_title} visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>{this.state.modal_text}</p>
          <p>时间：{this.state.modal_data}</p>
          <p>作者：{this.state.modal_admin}</p>
          <p>备注：{this.state.modal_remark}</p>
        </Modal>
        <QueueAnim>
          <Row key="outbox1">
            <Col span="24">
              <h1 className="floatleft">系统公告</h1>
            </Col>
          </Row>
          <Row key="outbox2">
            <QueueAnim>
              <Table dataSource={dataSource} columns={columns} onRowClick={this.onRowClick} size="middle" />
            </QueueAnim>
        </Row>
      </QueueAnim>
      </div>
    );
  }
});

const News = React.createClass({
  componentDidMount() {
    const data={
      current: '19',
      openKeys: ['sub6']
    }
    this.props.slideMenu(data)
  },
  render() {
    return (
      <div>
        <Row>
          <Newscontent />
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


export default connect(mapStateToProps,mapDispatchToProps)(News);
