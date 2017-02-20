import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  storyMetrics: {

  },
  score: {

  },
  commentCount: {

  },
});

const StoryMetrics = ({ story }) => {
  const { score, commentCount } = story;

  return (
    <View style={styles.storyMetrics}>
      <Text style={styles.score}>
        {score}
      </Text>

      <Text style={styles.commentCount}>
        {commentCount}
      </Text>
    </View>
  );
};

StoryMetrics.propTypes = {
  story: React.PropTypes.shape({
    score: React.PropTypes.number.isRequired,
    commentCount: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default StoryMetrics;
