import React from 'react';
import { Row,Col,Button,InputNumber,Upload, Icon, message, Input, DatePicker, Modal } from 'antd';
import { Lifecycle } from 'react-router'

import Sidermenu from '../menu/index';
import EventEmitter from '../../common/EventEmitter';




const props = {
  action: '/upload.do',
  beforeUpload: function (file) {
    console.log(file);
    const isTXT = file.type === 'text/plain';
    if (!isTXT) {
      message.error('只能上传 TXT 文件哦！');
    }
    return isTXT;
  }
};


const Sendcontent = React.createClass({
  getInitialState() {
    return {
      visible: false,
     };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
    this.setState({
      visible: false
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  },
  render() {
    return (
      <div>
        <Modal title="选择号码簿" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>111</p>
        </Modal>
        <Row>
          <Col style={{paddingTop:'20px'}} span="24"><h1>短信群发</h1></Col>
          <Col style={{paddingTop:'20px'}} span="12">
            <Row>
              <h4>输入号码</h4>
              <p>每行一个号码</p>
              <p>最多可以输入 150000 个号码</p>
              <Col style={{paddingTop:'20px'}} span="8">
                <textarea  cols={11} style={{resize:'none',padding:'10px 80px 0px 10px',height:'300px'}}></textarea>
                号码个数<InputNumber disabled={false} defaultValue={0} />
                <Upload {...props} multiple={true}>
                  <Button type="ghost">
                    <Icon type="upload" /> 批量导入txt号码文件
                  </Button>
                </Upload>
                <p>当前余额：【952条】</p>
              </Col>
              <Col style={{paddingTop:'20px'}} span="8">
                <Button type="ghost">清除重号</Button><br />
                <Button type="ghost">清除无效号码</Button><br />
                <Button type="ghost" onClick={this.showModal}>选择号码簿</Button><br />
                <Button type="ghost">选择客户</Button><br />
                <Button type="ghost">清空</Button>
              </Col>
            </Row>
          </Col>
          <Col style={{paddingTop:'20px'}} span="12">
            <Row>
            <h4>输入内容</h4>
              <p>每条短信70个字符，超出70字按67字每条计费</p>
              <p>最多允许输入300个字符</p>
                <Col style={{paddingTop:'20px'}} span="8">
                  <textarea  cols={11} style={{resize:'none',padding:'10px 80px 0px 10px',height:'300px'}}></textarea>
                  短信签名<Input  />
                字数<InputNumber disabled={{false}} defaultValue={0} /><br />
                短信条数<InputNumber disabled={{false}} defaultValue={0} />
                <DatePicker  format="yyyy/MM/dd HH:mm:ss" />
                </Col>
                <Col style={{paddingTop:'20px'}} span="8">
                  <Button type="ghost">预览</Button><br />
                  <Button type="ghost">选择短信</Button><br />
                  <Button type="ghost">清空</Button>
                </Col>
            </Row>
        </Col>
        <Col style={{paddingTop:'20px'}} span="24">
          <Button type="primary">确定</Button>
          <Button type="ghost">取消</Button>
        </Col>
        </Row>
        <Row span="24">
          <p>发送短信凡涉及以下内容的请不要发送，如果造成严重后果的我们将追究发送人的法律责任。谢谢配合！</p>
          <Col style={{paddingTop:'20px'}} span="12">
            <p>·危害国家安全，泄露国家机密，颠覆国家政权，破坏国家统一的；</p>
            <p>·煽动民族仇恨、民族歧视，破坏民族团结的；</p>
            <p>·散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
            <p>·侮辱或者诽谤他人，侵害他人合法权益的；</p>
            <p>·尝试欺骗、骚扰他人的。</p>
          </Col>

          <Col style={{paddingTop:'20px'}} span="12">
            <p>·损害国家荣誉和利益的；</p>
            <p>	·破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
            <p>	·散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
            <p>	·含有法律、行政法规、国家政策禁止的其他内容的；</p>
          </Col>
        </Row>
      </div>
    );
  }
});

const Send = React.createClass({
  mixins: [ Lifecycle ],

  routerWillLeave(nextLocation) {
      alert('离开？')
  },

  componentDidMount () {
    // 此初始化数据
    alert('首次载入，初始化的数据')
  },

  componentDidUpdate (prevProps) {
    // 通过参数更新数据
    alert('2')
  },

  componentWillUnmount () {
    // 在组件移除前
    alert('先前的组件要被移除')
  },
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingTop:'20px'}} span="18"><Sendcontent  /></Col>
        </Row>
      </div>
    );
  }
});

export default Send;
