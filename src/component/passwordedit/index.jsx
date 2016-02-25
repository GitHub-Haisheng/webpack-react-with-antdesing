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
      <h1>1</h1>
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
