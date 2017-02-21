import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import StoryDetails from './StoryDetails';
import StoryMetrics from './StoryMetrics';

const styles = StyleSheet.create({
  story: {
    margin: 15,
  },
});

const Story = ({ story, onPress }) => {
  const onPressByStory = () => onPress(story.id);

  return (
    <TouchableOpacity onPress={onPressByStory}>
      <View style={styles.story}>
        <StoryDetails story={story} />
        <StoryMetrics story={story} />
      </View>
    </TouchableOpacity>
  );
};

Story.propTypes = {
  story: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    by: React.PropTypes.string.isRequired,
    hoursSince: React.PropTypes.number.isRequired,
    url: React.PropTypes.string,
    score: React.PropTypes.number.isRequired,
    commentCount: React.PropTypes.number.isRequired,
  }).isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default Story;
