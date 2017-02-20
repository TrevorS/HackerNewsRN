import React, { Component } from 'react';
import { StyleSheet, ListView, View, RefreshControl } from 'react-native';

import Story from './Story';

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#D3D3D3',
  },
});

class StoryList extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id === r2.id,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.stories),
      refreshing: false,
    };

    this.onRefresh = this.onRefresh.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.stories),
      refreshing: this.state.refreshing && newProps.isFetching,
    });
  }

  onRefresh() {
    this.setState({
      refreshing: true,
    });

    this.props.fetchStories();
  }

  onEndReached(scrollEvent) {
    if (scrollEvent && !this.props.isFetching) {
      this.props.fetchStories(this.props.page + 1);
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}

        renderRow={story =>
          <Story key={story.id} story={story} />
        }

        renderSeparator={(sectionId, rowId) =>
          <View key={rowId} style={styles.separator} />
        }

        refreshControl={
          <RefreshControl
            refreshing={this.props.isFetching}
            onRefresh={this.onRefresh}
          />
        }

        onEndReached={this.onEndReached}

        enableEmptySections
      />
    );
  }
}

StoryList.propTypes = {
  stories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
    }),
  ).isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  fetchStories: React.PropTypes.func.isRequired,
  page: React.PropTypes.number.isRequired,
};

export default StoryList;
