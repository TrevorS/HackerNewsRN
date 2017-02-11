import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import { persistStore, autoRehydrate } from 'redux-persist';

import StoriesScreen from './js/screens/StoriesScreen';
import CommentsScreen from './js/screens/CommentsScreen';

const AppNavigator = StackNavigator({
  Stories: {
    screen: StoriesScreen,
  },
  Comments: {
    screen: CommentsScreen,
  },
});

const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const initialNavState = {
  index: 0,
  routes: [
    { key: 'InitA', routeName: 'Stories' },
    { key: 'InitB', routeName: 'Comments' },
  ],
};

const AppReducer = combineReducers({
  nav: (state = initialNavState, action) => {
    return AppNavigator.router.getStateForAction(action, state);
  },
})

class HackerNewsRN extends React.Component {
  store = createStore(AppReducer, undefined, autoRehydrate());

  componentDidMount() {
    persistStore(this.store, { storage: AsyncStorage });
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HackerNewsRN', () => HackerNewsRN);
