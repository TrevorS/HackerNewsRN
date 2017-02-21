import { REQUEST_COMMENTS, RECEIVE_COMMENTS } from './types';

const requestComments = storyId => ({
  type: REQUEST_COMMENTS,
  storyId,
});

const receiveComments = (storyId, comments) => ({
  type: RECEIVE_COMMENTS,
  storyId,
  comments,
  receivedAt: Date.now(),
});

export { requestComments, receiveComments };
