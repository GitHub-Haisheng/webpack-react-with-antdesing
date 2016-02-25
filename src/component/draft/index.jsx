import React from 'react';
import { Row,Col,Button, DatePicker,Table, Icon, Input,QueueAnim} from 'antd';
import EventEmitter from '../../common/EventEmitter';


const dataSource = [{
  xh: '1111',
  dylx: '2',
  dybt: '1',
  dynr: '文字短信',
  dyzs: '2015-02-16 11:12:30',
  bz:'succsee',
},{
  xh: '1111',
  dylx: '2',
  dybt: '1',
  dynr: '文字短信',
  dyzs: '2015-02-16 11:12:30',
  bz:'succsee',
},{
  xh: '1111',
  dylx: '2',
  dybt: '1',
  dynr: '文字短信',
  dyzs: '2015-02-16 11:12:30',
  bz:'succsee',
},{
  xh: '1111',
  dylx: '2',
  dybt: '1',
  dynr: '文字短信',
  dyzs: '2015-02-16 11:12:30',
  bz:'succsee',
},];

const columns = [
{
  title: '序号',
  dataIndex: 'xh',
  key: 'xh',
}, {
  title: '短语类型',
  dataIndex: 'dylx',
  key: 'dylx',
},{
  title: '短语标题',
  dataIndex: 'dybt',
  key: 'dybt',
},{
  title: '短语内容',
  dataIndex: 'dynr',
  key: 'dynr',
},{
  title: '短语字数',
  dataIndex: 'dyzs',
  key: 'dyzs',
},{
  title: '备注',
  dataIndex: 'bz',
  key: 'bz',
}];

const Draftcontent = React.createClass({
  render() {
    return (
      <div>
        <QueueAnim>
        <Row key="draft1">
          <Col span="24">
            <h1 className="floatleft">常用短语</h1>
            <div className="floatright">
              <lable>手机号码<input style={{ width: 120,display:'inline' }} className="ant-input" value={'手机号码'} /></lable>
              <DatePicker  style={{ width: 184 }}  />
              <Button type="ghost">查询</Button>
            </div>
          </Col>
        </Row>
        <Row key="draft2">
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
      current: '5',
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
        <Draftcontent />
      </div>
    );
  }
});

export default Status;
