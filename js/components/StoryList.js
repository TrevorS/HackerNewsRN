import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';

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
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.stories),
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={story => <Story key={story.id} story={story} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
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
};

export default StoryList;
