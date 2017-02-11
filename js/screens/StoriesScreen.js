import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const StoriesScreen = ({ navigation }) => (
  <View>
    <Button
      title="Hello"
      onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Comments' }))}
    />
  </View>
);

StoriesScreen.navigationOptions = {
  title: 'Stories',
};

export default StoriesScreen;
