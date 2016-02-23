import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import { Link,History } from 'react-router'

const Sidermenu = React.createClass({
  getInitialState() {
    return {
      current: this.props.current,
      openKeys: this.props.openKeys
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1)
    });
  },
  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 }}
        openKeys={this.state.openKeys}
        onOpen={this.onToggle}
        onClose={this.onToggle}
        selectedKeys={[this.state.current]}
        mode="inline" theme="dark">
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>发送短信</span></span>}>
            <Menu.Item key="1"><Link to={`/send`}>短信群发</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`/outbox`}>发件箱</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`/inbox`}>收件箱</Link></Menu.Item>
            <Menu.Item key="4"><Link to={`/status`}>状态查询</Link></Menu.Item>
            <Menu.Item key="5"><Link to={`/draft`}>常用短语</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="message" /><span>个性短信</span></span>}>
          <Menu.Item key="6"><Link to={`/specialsend`}>个性短信</Link></Menu.Item>
          <Menu.Item key="7"><Link to={`/cyclesend`}>循环短信</Link></Menu.Item>
          <Menu.Item key="8"><Link to={`/cycleoutbox`}>循环短信发件箱</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="team" /><span>客户管理</span></span>}>
          <Menu.Item key="9"><Link to={`/customer`}>客户管理</Link></Menu.Item>
          <Menu.Item key="10"><Link to={`/group`}>分组管理</Link></Menu.Item>
          <Menu.Item key="11"><Link to={`/customerimport`}>客户导入</Link></Menu.Item>
          <Menu.Item key="12"><Link to={`/customerexport`}>客户导出</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="pay-circle" /><span>财务信息</span></span>}>
          <Menu.Item key="13"><Link to={`/balance`}>当前余额</Link></Menu.Item>
          <Menu.Item key="14"><Link to={`/chargehistory`}>充值记录</Link></Menu.Item>
          <Menu.Item key="15"><Link to={`/consumehistory`}>消费记录</Link></Menu.Item>
          <Menu.Item key="16"><Link to={`/usedetail`}>充值/消费明细</Link></Menu.Item>
          <Menu.Item key="17"><Link to={`/contact`}>充值联系</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="user" /><span>用户信息</span></span>}>
          <Menu.Item key="18"><Link to={`/passwordedit`}>修改密码</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>系统信息</span></span>}>
          <Menu.Item key="19"><Link to={`/news`}>系统公告</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});

export default Sidermenu;
