import React from 'react';
import { View } from 'react-native';

import { StoryListContainer } from '../containers';

const StoriesScreen = () => (
  <View>
    <StoryListContainer />
  </View>
);

StoriesScreen.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  }).isRequired,
};

StoriesScreen.navigationOptions = {
  title: 'HackerNewsRN',
};

export default StoriesScreen;
