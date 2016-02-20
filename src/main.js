import './common/lib';
import { ReactDOM,render } from 'react-dom';
import React from 'react';
import { Router, Route, useRouterHistory,IndexRoute} from 'react-router';
import { createHashHistory } from 'history';

// 此处用于添加根路径
const appHistory = useRouterHistory(createHashHistory)({
  queryKey: false
});

import App from './component/app/index';
import Home from './component/home/index';
import Send from './component/send/index';
import Outbox from './component/outbox/index';
import Inbox from './component/inbox/index';
import Status from './component/status/index';
import Draft from './component/draft/index';

import Specialsend from './component/specialsend/index';
import Cyclesend from './component/cyclesend/index';
import Cycleoutbox from './component/cycleoutbox/index';

import Customer from './component/customer/index';
import Group from './component/group/index';
import Customerimport from './component/customerimport/index';
import Customerexport from './component/customerexport/index';

import Balance from './component/balance/index';
import Chargehistory from './component/chargehistory/index';
import Consumehistory from './component/consumehistory/index';
import Usedetail from './component/usedetail/index';
import Contact from './component/contact/index';

import Passwordedit from './component/passwordedit/index';
import News from './component/news/index';

render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="send" component={Send}></Route>
      <Route path="outbox" component={Outbox}></Route>
      <Route path="inbox" component={Inbox}></Route>
      <Route path="status" component={Status}></Route>
      <Route path="draft" component={Draft}></Route>

      <Route path="specialsend" component={Specialsend}></Route>
      <Route path="cyclesend" component={Cyclesend}></Route>
      <Route path="cycleoutbox" component={Cycleoutbox}></Route>

      <Route path="customer" component={Customer}></Route>
      <Route path="group" component={Group}></Route>
      <Route path="customerimport" component={Customerimport}></Route>
      <Route path="customerexport" component={Customerexport}></Route>

      <Route path="balance" component={Balance}></Route>
      <Route path="chargehistory" component={Chargehistory}></Route>
      <Route path="consumehistory" component={Consumehistory}></Route>
      <Route path="usedetail" component={Usedetail}></Route>
      <Route path="contact" component={Contact}></Route>

      <Route path="passwordedit" component={Passwordedit}></Route>

      <Route path="news" component={News}></Route>
</Route>

  </Router>
), document.getElementById('app'))
