import React from 'react';
import { Form, Input, Button, Checkbox, Radio, Row, Col, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setSing} from '../../action/actions';

const Loginform = React.createClass({
  handleClick() {
    this.props.setSing(true);
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },
  getValidateStatus(field) {
    const { isFieldValidating, getFieldError, getFieldValue } = this.props.form;

    if (isFieldValidating(field)) {
      return 'validating';
    } else if (!!getFieldError(field)) {
      return 'error';
    } else if (getFieldValue(field)) {
      return 'success';
    }
  },
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('username', {
      rules: [
        { required: true,  message: '不能为空' },
        { validator: this.userExists },
      ],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, message: '不能为空' },
        { validator: this.userExists },
      ],
    });
    return (
      <div className="logincontainer">
        <h1>中国移动商务信息平台</h1>
        <Form horizontal>
          <FormItem
            {...formItemLayout}
            label="用户名："
            hasFeedback>
            <Input type="text" {...nameProps}  placeholder="用户名" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码："
            hasFeedback>
            <Input type="password" {...passwdProps} placeholder="密码" />
          </FormItem>
          <FormItem
            labelCol= {{ span: 6 }}
            wrapperCol= {{ span: 14 }}
            label="验证码："
            hasFeedback>
            <InputGroup>
              <Col span="12">
                <Input type="text" {...getFieldProps('Codes')} placeholder="验证码" />
              </Col>
              <Col span="12">
                <div style={{background:'red',width:'88px',height:'32px'}}></div>
              </Col>
              </InputGroup>
            </FormItem>
          <Row>
            <Col span="12">
              <Button type="primary" onClick={this.handleClick.bind(this)}>确定</Button>
            </Col>
            <Col span="12">
              <Button type="primary" onClick={this.handleReset.bind(this)} >重置</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
});

function mapStateToProps(state) {
    return {
      singin: state.smsApp.setlogin.singin,
    }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSing }, dispatch);
};

const Login = Form.create({})(Loginform);

export default connect(mapStateToProps,mapDispatchToProps)(Login);
