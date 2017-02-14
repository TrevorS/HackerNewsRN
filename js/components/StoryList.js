import React from 'react';
import { View } from 'react-native';

import Story from './Story';

const StoryList = ({ stories }) => (
  <View>
    {stories.map(story =>
      <Story key={story.id} story={story} />,
    )}
  </View>
);

StoryList.propTypes = {
  stories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
    })).isRequired,
};

export default StoryList;
