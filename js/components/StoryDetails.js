import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  storyDetails: {

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

const StoryDetails = ({ story }) => {
  const { title, by, hoursSince, url } = story;

  return (
    <View style={styles.storyDetails}>
      <Text style={styles.header}>
        {title}
      </Text>

      <Text style={styles.by}>
        {by}
      </Text>

      <Text style={styles.time}>
        {`${hoursSince}H`}
      </Text>

      <Text style={styles.url}>
        {url}
      </Text>
    </View>
  );
};

StoryDetails.propTypes = {
  story: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    by: React.PropTypes.string.isRequired,
    hoursSince: React.PropTypes.number.isRequired,
    url: React.PropTypes.string,
  }).isRequired,
};

export default StoryDetails;
