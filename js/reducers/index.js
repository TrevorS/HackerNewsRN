import { combineReducers } from 'redux';

import stories from './stories';
import comments from './comments';
import nav from './nav';

const AppReducer = combineReducers({
  stories,
  comments,
  nav,
});

export default AppReducer;
