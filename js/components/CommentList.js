import React from 'react';
import { View } from 'react-native';

import Comment from './Comment';

const CommentList = ({ comments }) => (
  <View>
    {comments.map(comment =>
      <Comment key={comment.id} comment={comment} />,
    )}
  </View>
);

CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
    })).isRequired,
};

export default CommentList;
