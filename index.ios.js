import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import createLogger from 'redux-logger';

import AppNavigator from './js/navigation';
import AppReducer from './js/reducers';

const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

class HackerNewsRN extends Component {
  constructor(props) {
    super(props);

    const logger = createLogger();

    this.store = createStore(AppReducer, applyMiddleware(thunk, logger));
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
