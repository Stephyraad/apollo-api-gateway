import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { TPost } from '../../types';
import { PostTagsEnum } from '../../enums';
import { getAllPosts, getPostsByUserId, getPostsByTags } from '../../controllers/post-controllers';

export const PostQueries = {
  getAllPosts: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TPost))),
    resolve: async (_source) => {
      const posts = await getAllPosts();
      return posts;
    },
  },
  getPostsByUserId: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TPost))),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (_source, { id }) => {
      const posts = await getPostsByUserId(id);
      return posts;
    },
  },
  getPostsByTag: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TPost))),
    args: {
      tags: {
        type: new GraphQLList(PostTagsEnum),
      },
    },
    resolve: async (_source, { tags }) => {
      const posts = await getPostsByTags(tags);
      return posts;
    },
  },
};
