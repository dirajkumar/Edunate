import { combineReducers } from 'redux';
import HeaderReducer from './header';

const rootReducer = combineReducers({
  header: HeaderReducer
});

export default rootReducer;
