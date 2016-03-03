import { combineReducers } from 'redux'
import { SLIDE_MENU } from '../action/actions'


const initialState = {
    current: '',
    openKeys: [],
    smsbalance:'',
    username:'',
};

function slidemenuactive(state = initialState, action) {//使用 ES6 参数默认值语法 来精简代码
  switch (action.type) {
    case SLIDE_MENU:
      return Object.assign({}, state, {
        current: action.menuarray.current,
        openKeys: action.menuarray.openKeys
      });
    default:
      return state;
  }
}

const smsApp = combineReducers({
  slidemenuactive
})

export default smsApp
