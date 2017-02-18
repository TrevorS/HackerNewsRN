import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  story: {
    margin: 15,
  },
  header: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontWeight: 'bold',
  },
  by: {
    fontSize: 8,
  },
  time: {
    fontSize: 8,
  },
  url: {
    fontSize: 6,
  },
});

const Story = ({ story }) => (
  <View style={styles.story}>
    <View style={styles.details}>
      <Text style={styles.header}>
        {story.title}
      </Text>

      <Text style={styles.by}>
        {story.by}
      </Text>

      <Text style={styles.time}>
        {`${story.hoursSince}H`}
      </Text>

      <Text style={styles.url}>
        {story.url}
      </Text>
    </View>

    <View style={styles.scoreAndComments}>
      <Text style={styles.score}>
        {story.score}
      </Text>

      <Text style={styles.commentCount}>
        {story.commentCount}
      </Text>
    </View>
  </View>
);

Story.propTypes = {
  story: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    by: React.PropTypes.string.isRequired,
    hoursSince: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    commentCount: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default Story;
