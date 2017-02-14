import React from 'react';
import { Text } from 'react-native';

const Comment = ({ comment }) => (
  <Text>
    This is a comment about {comment.title}.
  </Text>
);

Comment.propTypes = {
  comment: React.PropTypes.shape({ title:
    React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
