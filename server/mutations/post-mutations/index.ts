import { GraphQLNonNull } from 'graphql';
import { TCreatePostPayload, TCreatePostInput } from '../../types';
import { createPost } from '../../controllers';

export const PostMutations = {
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
