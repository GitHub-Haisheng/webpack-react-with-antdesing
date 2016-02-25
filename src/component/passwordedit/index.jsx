import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
import EventEmitter from '../../common/EventEmitter';


const Passwordeditcontent = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          label="原密码："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="password"  placeholder="请输入密码" />
        </FormItem>
        <FormItem
          label="新密码："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="password"  placeholder="请输入密码" />
        </FormItem>
        <FormItem
          label="确认密码："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
        <Row>
          <Col span="6" offset="6" style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">确定</Button>
            <Button type="ghost">重置</Button>
          </Col>
        </Row>
      </Form>
    );
  }
});

const Passwordedit = React.createClass({
  componentDidMount() {
    let data = {
      current: '18',
      openKeys: ['sub5']
    };
    EventEmitter.dispatch('menuActive', data);
	},
  componentWillUnmount: function(){
		EventEmitter.unSubscribe('changemenuActive');
	},
  render() {
    return (
      <div>
        <Passwordeditcontent />
      </div>
    );
  }
});

export default Passwordedit;
