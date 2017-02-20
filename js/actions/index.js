import { HN } from '../firebase';

export const REQUEST_STORIES = 'REQUEST_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const hackerNews = new HN();

const newComments = [
  { id: 1, title: 'First Comment' },
  { id: 2, title: 'Second Comment' },
  { id: 3, title: 'Third Comment' },
];

export function requestStories(page) {
  return {
    type: REQUEST_STORIES,
    page,
  };
}

function receiveStories(stories) {
  return {
    type: RECEIVE_STORIES,
    stories,
    receivedAt: Date.now(),
  };
}

export function fetchStories(page) {
  return (dispatch) => {
    dispatch(requestStories(page));

    return hackerNews.getTopStories(page).then(stories =>
      dispatch(receiveStories(stories)));
  };
}

function requestComments(storyId) {
  return {
    type: REQUEST_COMMENTS,
    storyId,
  };
}

function receiveComments(storyId, comments) {
  return {
    type: RECEIVE_COMMENTS,
    storyId,
    comments,
    receivedAt: Date.now(),
  };
}

export function fetchComments(storyId) {
  return (dispatch) => {
    dispatch(requestComments(storyId));
    return dispatch(receiveComments(storyId, newComments));
  };
}
