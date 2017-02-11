import { combineReducers } from 'redux';

import AppNavigator from '../navigation';

const initialNavState = {
  index: 0,
  routes: [
    { key: 'InitA', routeName: 'Stories' },
    { key: 'InitB', routeName: 'Comments' },
  ],
};

const AppReducer = combineReducers({
  nav: (state = initialNavState, action) =>
    AppNavigator.router.getStateForAction(action, state),
});

export default AppReducer;
