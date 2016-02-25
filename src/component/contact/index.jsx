import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
import EventEmitter from '../../common/EventEmitter';


const Contactcontent = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          label="姓名："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text"  placeholder="" />
        </FormItem>
        <FormItem
          label="公司名称："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text"  placeholder="" />
        </FormItem>
        <FormItem
          label="手机："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text" placeholder="" />
        </FormItem>
        <FormItem
          label="电话："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text" placeholder="" />
        </FormItem>
        <FormItem
          label="传真："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text" placeholder="" />
        </FormItem>
        <FormItem
          label="QQ："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text" placeholder="" />
        </FormItem>
        <FormItem
          label="E-Mail："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8 }}>
          <Input type="text" placeholder="" />
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

const Contact = React.createClass({
  componentDidMount() {
    let data = {
      current: '17',
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
        <Contactcontent />
      </div>
    );
  }
});

export default Contact;
