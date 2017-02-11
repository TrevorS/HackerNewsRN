import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const CommentsScreen = ({ navigation }) => (
  <View>
    <Button
      title="CommentsScreen"
      onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Stories' }))}
    />
  </View>
);

CommentsScreen.navigationOptions = {
  title: 'Comments',
};

export default CommentsScreen;
