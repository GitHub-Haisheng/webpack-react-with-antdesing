import { combineReducers } from 'redux'
import { SLIDE_MENU } from '../action/actions'


const slidemenuState = {
    current: '',
    openKeys: [],
    smsbalance:'',
};
const singinState = {
    username:'',
    singin:false
};

function slidemenuactive(state = slidemenuState, action) {
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
function setlogin(state = singinState, action) {
  switch (action.type) {
    case "SET_SINGIN":
      return Object.assign({}, state, {
        singin: action.booleans,
      });
    default:
      return state;
  }
}

const smsApp = combineReducers({
  slidemenuactive,
  setlogin
})

export default smsApp
