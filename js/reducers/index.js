import { combineReducers } from 'redux';

import AppNavigator from '../navigation';

import { REQUEST_STORIES,
         RECEIVE_STORIES,
         REQUEST_COMMENTS,
         RECEIVE_COMMENTS } from '../actions';

const initialNavState = {
  index: 0,
  routes: [
    { key: 'InitA', routeName: 'Stories' },
    { key: 'InitB', routeName: 'Comments' },
  ],
};

function stories(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.stories,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

function comments(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.comments,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

function nav(state = initialNavState, action) {
  return AppNavigator.router.getStateForAction(action, state);
}

const AppReducer = combineReducers({
  stories,
  comments,
  nav,
});

export default AppReducer;
