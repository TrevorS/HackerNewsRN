import React from 'react';

import { CommentListContainer } from '../containers';

const CommentsScreen = () => (
  <CommentListContainer />
);

CommentsScreen.navigationOptions = {
  title: 'Comments',
};

export default CommentsScreen;
