import { StackNavigator } from 'react-navigation';

import { StoriesScreen, CommentsScreen } from '../screens';

const AppNavigator = StackNavigator({
  Stories: {
    screen: StoriesScreen,
  },
  Comments: {
    screen: CommentsScreen,
  },
});

export default AppNavigator;
