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

CommentsScreen.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  }).isRequired,
};

CommentsScreen.navigationOptions = {
  title: 'Comments',
};

export default CommentsScreen;
