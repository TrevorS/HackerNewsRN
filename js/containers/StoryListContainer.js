import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchStories } from '../actions';
import { StoryList } from '../components';

const mapStateToProps = state => ({
  stories: state.stories.items,
  isFetching: state.stories.isFetching,
  page: state.stories.page,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchStories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
