import { firebaseDB } from './';

import { getPageIds, createStory } from './utils';

class HN {
  constructor() {
    this.database = firebaseDB;
  }

  getTopStories(page) {
    return this.database.ref('/v0/topstories').once('value')
      .then(ids => this.fetchItems(getPageIds(ids.val(), page)))
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
