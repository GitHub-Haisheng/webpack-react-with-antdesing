import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Button,InputNumber,Upload, Icon, message, Input, DatePicker, Modal,Checkbox } from 'antd';
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


const Specialsendcontent = React.createClass({
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
        <QueueAnim>

          <div className="sendleft" key="specialsend1">
            <h4>输入内容</h4>
            <p>每条短信70个字符，超出70字按67字每条计费</p>
            <p>最多允许输入300个字符</p>
            <div className="send-panle">
              <Input type="textarea"  style={{resize:'none',padding:'10px 80px 0px 10px',height:'300px',width:'700px'}} />
              <p>短信签名<span>0</span></p>
              <p>字数<span>0</span></p>
              <p>短信条数<span>0</span></p>
              <DatePicker showTime={true} format={"yyyy-MM-dd HH:mm:ss"} />
              <label>
                <Checkbox defaultChecked={false} />
                定时发送
              </label>
            </div>
            <div className="send-btngroup">
              <Button type="primary">确定</Button>
              <Button type="ghost">取消</Button>
            </div>
          </div>

          <div className="sendleft alert alert-danger" style={{width:'100%'}} key="specialsend2">
            <h3>发送短信凡涉及以下内容的请不要发送，如果造成严重后果的我们将追究发送人的法律责任。谢谢配合！</h3>
            <p>
              危害国家安全，泄露国家机密，颠覆国家政权，破坏国家统一的；<br />
              ·损害国家荣誉和利益的；<br />
              ·煽动民族仇恨、民族歧视，破坏民族团结的；<br />
              ·破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
              ·散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
              ·散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
              ·侮辱或者诽谤他人，侵害他人合法权益的；<br />
              ·含有法律、行政法规、国家政策禁止的其他内容的；<br />
              ·尝试欺骗、骚扰他人的。
            </p>
          </div>
        </QueueAnim>
      </div>
    );
  }
});

const Specialsend = React.createClass({
  componentDidMount() {
    let data = {
      current: '6',
      openKeys: ['sub2']
    };
    EventEmitter.dispatch('menuActive', data);
	},
  componentWillUnmount: function(){
		EventEmitter.unSubscribe('changemenuActive');
	},
  render() {
    return (
      <div>
        <Specialsendcontent  />
      </div>
    );
  }
});

export default Specialsend;
