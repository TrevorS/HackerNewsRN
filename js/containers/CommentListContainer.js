import { connect } from 'react-redux';

import { CommentList } from '../components';

const mapStateToProps = state => ({
  storyId: state.comments.storyId,
  comments: state.comments.items,
  isFetching: state.comments.isFetching,
});

export default connect(mapStateToProps)(CommentList);
