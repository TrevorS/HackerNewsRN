import React from 'react';
import { Text } from 'react-native';

const Story = ({ story }) => (
  <Text>This is about {story.title}.</Text>
);

Story.propTypes = {
  story: React.PropTypes.shape({ title:
    React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Story;
