import { firebaseDB } from './';

class HN {
  constructor() {
    this.database = firebaseDB;
  }

  getTopStories() {
    return this.database.ref('/v0/topstories').once('value')
      .then(ids => this.fetchItems(ids.val()))
      .then(stories => stories.map(story =>
        ({ id: story.val().id, title: story.val().title })));
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
