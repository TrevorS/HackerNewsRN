const PER_PAGE = 20;

const hoursSince = time =>
  Math.floor(Math.abs(new Date() - new Date(time * 1000)) / 3.6e6);

const commentCount = (descendants = 0) => descendants;

const doesExist = (by, text) => Boolean(by && text);

const createStory = story => ({
  id: story.id,
  title: story.title,
  by: story.by,
  url: story.url,
  score: story.score,
  hoursSince: hoursSince(story.time),
  commentCount: commentCount(story.descendants),
});

const createComment = comment => ({
  id: comment.id,
  by: comment.by,
  text: comment.text,
  hoursSince: hoursSince(comment.time),
  doesExist: doesExist(comment.by, comment.text),
});

const getPageIds = (ids, page = 1) => {
  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;

  return ids.slice(start, end);
};

export { getPageIds, createStory, createComment };
