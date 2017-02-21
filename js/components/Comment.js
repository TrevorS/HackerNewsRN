import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  comment: {

  },
  text: {

  },
  by: {

  },
  time: {

  },
});

const Comment = ({ comment }) => {
  const { text, by, hoursSince } = comment;

  return (
    <View style={styles.comment}>
      <Text style={styles.text}>
        {text}
      </Text>

      <Text style={styles.by}>
        {by}
      </Text>

      <Text style={styles.time}>
        {`${hoursSince}H`}
      </Text>
    </View>
  );
};

Comment.propTypes = {
  comment: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    by: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    hoursSince: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
