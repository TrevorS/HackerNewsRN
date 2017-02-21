import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';

import Comment from './Comment';

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#D3D3D3',
  },
});

class CommentList extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id === r2.id,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.comments),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}

        renderRow={comment =>
          comment.doesExist &&
            <Comment
              key={comment.id}
              comment={comment}
            />
        }

        renderSeparator={(sectionId, rowId) =>
          <View
            key={rowId}
            style={styles.separator}
          />
        }

        enableEmptySections
      />
    );
  }
}

CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      doesExist: React.PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
