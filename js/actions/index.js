import { HN } from '../firebase';

import { requestStories, receiveStories } from './stories';
import { requestComments, receiveComments } from './comments';

const hackerNews = new HN();

const fetchStories = (page = 1) => (dispatch) => {
  dispatch(requestStories(page));

  return hackerNews.getTopStories(page).then(stories =>
    dispatch(receiveStories(page, stories)));
};

const fetchComments = storyId => (dispatch) => {
  dispatch(requestComments(storyId));

  return hackerNews.getComments(storyId).then(comments =>
    dispatch(receiveComments(storyId, comments)));
};

export { fetchStories, fetchComments };
