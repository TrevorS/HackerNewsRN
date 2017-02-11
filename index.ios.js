import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { persistStore, autoRehydrate } from 'redux-persist';

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

    this.store = createStore(AppReducer, undefined, autoRehydrate());
  }

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
