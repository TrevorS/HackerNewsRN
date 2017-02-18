import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../actions';
import { StoryList } from '../components';

class StoryListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories());
  }

  render() {
    return (
      <StoryList stories={this.props.stories} />
    );
  }
}

StoryListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  stories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
    })).isRequired,
};

function mapStateToProps(state) {
  return {
    stories: state.stories.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStoryClick: () => console.log('clicked'),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryListContainer);
