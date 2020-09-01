import { GraphQLNonNull } from 'graphql';
import { TCreatePostPayload, TCreatePostInput } from '../types';
import { createPost } from '../controllers/postControllers';

export const postMutations = {
  createPost: {
    type: TCreatePostPayload,
    args: {
      input: {
        type: new GraphQLNonNull(TCreatePostInput),
      },
    },
    resolve: (_source, args) => {
      const { input } = args;
      return {
        post: createPost(input),
      };
    },
  },
};
