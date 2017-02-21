import { REQUEST_STORIES, RECEIVE_STORIES } from './types';

const requestStories = page => ({
  type: REQUEST_STORIES,
  page,
});

const receiveStories = (page, stories) => ({
  type: RECEIVE_STORIES,
  page,
  stories,
  receivedAt: Date.now(),
});

export { requestStories, receiveStories };
