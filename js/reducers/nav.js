import { NavigationActions } from 'react-navigation';

import { RECEIVE_COMMENTS } from '../actions/types';

import AppNavigator from '../navigation';

const initialState = {
  index: 0,
  routes: [
    {
      key: 'A',
      routeName: 'Stories',
    },
  ],
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Comments' }), state);
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};

export default nav;
