const PER_PAGE = 20;

const hoursSince = time =>
  Math.floor(Math.abs(new Date() - new Date(time * 1000)) / 3.6e6);

const commentCount = (descendants = 0) => descendants;

const getPageIds = (ids, page = 1) => {
  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;

  return ids.slice(start, end);
};

const createStory = story => ({
  id: story.val().id,
  title: story.val().title,
  by: story.val().by,
  hoursSince: hoursSince(story.val().time),
  url: story.val().url,
  score: story.val().score,
  commentCount: commentCount(story.val().descendants),
});

export { getPageIds, createStory };
