import { REQUEST_STORIES, RECEIVE_STORIES } from '../actions/types';

const initialState = {
  isFetching: false,
  items: [],
  page: 1,
};

const stories = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STORIES:
      return {
        ...state,
        page: action.page,
        isFetching: true,
      };
    case RECEIVE_STORIES:
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          ...action.stories,
        ],
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default stories;
