import React from 'react';

import { Row,Col,QueueAnim } from 'antd';
import { Link } from 'react-router'

import './home.less';


const data = [
    {
    name: '温馨提示',
    url: '1',
    datatime: '2016-01-01',
    },
    {
    name: '温馨提示',
    url: '2',
    datatime: '2016-01-01',
    },
    {
    name: '温馨提示',
    url: '3',
    datatime: '2016-01-01',
    },
    {
    name: '温馨提示',
    url: '4',
    datatime: '2016-01-01',
    },

];

const imgs = [
    {
    name: '短信群发',
    src: '/send',
    img: require('../../images/home_message.jpg')
    },
    {
    name: '发件箱',
    src: '/send',
    img: require('../../images/home_electric.jpg')
    },
    {
    name: '收件箱',
    src: '/send',
    img: require('../../images/home_mode.jpg')
    },
    {
    name: '客户管理',
    src: '/send',
    img: require('../../images/home_user.jpg')
    },
    {
    name: '客户导入',
    src: '/send',
    img: require('../../images/home_syspwd.jpg')
    },
    {
    name: '客户导出',
    src: '/send',
    img: require('../../images/home_changepwd.jpg')
    },
    {
    name: '当前余额',
    src: '/send',
    img: require('../../images/home_camera.jpg')
    },
    {
    name: '充值记录',
    src: '/send',
    img: require('../../images/home_metric.jpg')
    },
    {
    name: '消费记录',
    src: '/send',
    img: require('../../images/home_weather.jpg')
    },
];


const HomeList = React.createClass({
  render() {
    var listName = this.props.data.map(function(list,index){
      return <Item key={index} item={list}></Item>
    });
    return (
      <ul className="homenewslist">
        {listName}
      </ul>
    );
  }
});

const Item = React.createClass({
  render() {
    return (
      <li>
          <a href={this.props.item.url}>{this.props.item.name}</a>
          <span>{this.props.item.datatime}</span>
      </li>
    );
  }
});

const HomeImageLink = React.createClass({
  render() {
    var listName = this.props.data.map(function(list,index){
      return <ImageLink key={'homeimg'+index} item={list}></ImageLink>
    });
    return (
        <QueueAnim
          component="div"
          animConfig={[
                        { opacity: [1, 0], translateY: [0, 50] },
                        { opacity: [1, 0], translateY: [0, -50] }
                      ]}
          >
          {listName}
        </QueueAnim>
    );
  }
});

const ImageLink = React.createClass({
  render() {
    return (
      <div className="homeImage">
          <Link to={this.props.item.src} style={{marginTop:'10px',display:'block'}}>
          <img src={this.props.item.img} />
          <p style={{textAlign: 'center'}}>{this.props.item.name}  </p>
          </Link>
      </div>

    );
  }
});


const Home = React.createClass({
  render() {
    return (
      <div>
          <Row>
            <QueueAnim>
              <Col span="12" key="home1">
                <QueueAnim component="div">
                  <div key="home1a">
                  <h3>当前余额(条)</h3>
                  <p>92</p>
                  </div>
                  <br/>
                  <div key="home1b">
                  <h3>系统公告</h3>
                  <HomeList data={data}></HomeList>
                  </div>
                  <br/>
                  <div key="home1c">
                  <h3>注意事项</h3>
                  <p className="border">&nbsp;&nbsp;&nbsp;&nbsp;发送短信凡涉及以下内容的请不要发送，如果造成严重后果的我们将追究发送人的法律责任。谢谢配合！<br/>
                    ·危害国家安全，泄露国家机密，颠覆国家政权，破坏国家统一的；<br/>
                    ·损害国家荣誉和利益的；<br/>
                    ·煽动民族仇恨、民族歧视，破坏民族团结的；<br/>
                    ·破坏国家宗教政策，宣扬邪教和封建迷信的； <br/>
                    ·散布谣言，扰乱社会秩序，破坏社会稳定的；<br/>
                    ·散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br/>
                    ·侮辱或者诽谤他人，侵害他人合法权益的；<br/>
                    ·含有法律、行政法规、国家政策禁止的其他内容的；<br/>
                    ·尝试欺骗、骚扰他人的。</p>

                  </div>
                </QueueAnim>
              </Col>
              <Col span="12" key="home2">

                  <HomeImageLink data={imgs}></HomeImageLink>

              </Col>
            </QueueAnim>
          </Row>
      </div>
    );
  }
});

export default Home;
