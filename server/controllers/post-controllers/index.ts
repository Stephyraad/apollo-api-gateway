import { TDateTime } from '../../types';
import { generateId } from '../../utils';
import { posts } from '../../../mocks/db/posts-db';

export const getAllPosts = () => posts;

export const getPostsByUserId = (id) => {
  if (!id) throw new Error('Missing id param');
  return posts.filter((post) => post.user.id === id);
};

export const getPostsByTags = (tags) => {
  return posts.reduce((acc, post) => {
    const isPostTagsValid = post.tags.some((tag) => tags.includes(tag));
    return isPostTagsValid ? [...acc, post] : acc;
  }, []);
};

export const createPost = (input) => {
  // TODO: add some query validations to enforce required fields
  const newPost = {
    id: generateId(),
    createdAt: TDateTime,
    ...input,
  };
  posts.unshift(newPost);
  return newPost;
};
