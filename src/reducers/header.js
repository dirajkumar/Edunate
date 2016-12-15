import { TOGGLE_SIDEBAR } from '../actions/types';
import { CHANGE_LINK } from '../actions/types';

const defaultState = { showSideBar: false, activeLink: 'home' };

export default function (state = defaultState, action) {
  console.log('Header Reducer', state, action);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSideBar: action.payload };
      break;
    case CHANGE_LINK:
      return { ...state, activeLink: action.payload };
      break;
    default:
    return state;
  }
}
