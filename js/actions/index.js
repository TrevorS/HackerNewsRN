export const REQUEST_STORIES = 'REQUEST_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const stories = [
  { id: 1, title: 'First Story Dude' },
  { id: 2, title: 'Second Story' },
  { id: 3, title: 'Third Story' },
];

const comments = [
  { id: 1, title: 'First Comment' },
  { id: 2, title: 'Second Comment' },
  { id: 3, title: 'Third Comment' },
];

export function requestStories() {
  return {
    type: REQUEST_STORIES,
  };
}

function receiveStories() {
  return {
    type: RECEIVE_STORIES,
    stories,
    receivedAt: Date.now(),
  };
}

export function fetchStories() {
  return (dispatch) => {
    dispatch(requestStories());
    return dispatch(receiveStories());
  };
}

function requestComments(storyId) {
  return {
    type: REQUEST_COMMENTS,
    storyId,
  };
}

function receiveComments(storyId) {
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
    return dispatch(receiveComments(storyId));
  };
}
