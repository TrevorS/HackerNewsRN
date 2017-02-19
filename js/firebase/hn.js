import { firebaseDB } from './';

const hoursSince = time =>
  Math.floor(Math.abs(new Date() - new Date(time * 1000)) / 3.6e6);

const commentCount = descendants => descendants || 0;

const createStory = story => ({
  id: story.val().id,
  title: story.val().title,
  by: story.val().by,
  hoursSince: hoursSince(story.val().time),
  url: story.val().url,
  score: story.val().score,
  commentCount: commentCount(story.val().descendants),
});

class HN {
  constructor() {
    this.database = firebaseDB;
  }

  getTopStories() {
    return this.database.ref('/v0/topstories').once('value')
      .then(ids => this.fetchItems(ids.val()))
      .then(stories => stories.map(story => createStory(story)));
  }

  fetchItems(ids) {
    return Promise.all(ids.map(id =>
      this.fetchItem(id),
    ));
  }

  fetchItem(id) {
    return this.database.ref(`/v0/item/${id}`).once('value');
  }
}

export default HN;
