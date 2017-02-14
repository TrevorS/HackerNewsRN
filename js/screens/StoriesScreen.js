import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { StoryListContainer } from '../containers';

const StoriesScreen = ({ navigation }) => (
  <View>
    <Button
      title="Hello"
      onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Comments' }))}
    />
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
  title: 'Stories',
};

export default StoriesScreen;
