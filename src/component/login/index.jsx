import React from 'react';
import { Form, Input, Button, Checkbox, Radio, Row, Col, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setSing} from '../../action/actions';

const Login = React.createClass({
  handleClick() {
    this.props.setSing(true)
  },
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className="logincontainer">
        <h1>中国移动商务信息平台</h1>
        <Form horizontal>
          <FormItem
            {...formItemLayout}
            label="用户名：">
            <Input type="text"  placeholder="请输入密码" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码：">
            <Input type="password"  placeholder="请输入密码" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码：">
            <Input type="text"  placeholder="请输入验证码" />
          </FormItem>
          <Row>
            <Col span="12">
              <Button type="primary" onClick={this.handleClick}>确定</Button>
            </Col>
            <Col span="12">
              <Button type="primary" >重置</Button>
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


export default connect(mapStateToProps,mapDispatchToProps)(Login);
