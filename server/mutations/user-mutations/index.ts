import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { TCreateUserPayload, TCreateUsersPayload, TCreateUserInput } from '../../types'
import { createUser, createUsers } from '../../controllers';

export const UserMutations = {
  createUser: {
    type: TCreateUserPayload,
    args: {
      input: {
        type: new GraphQLNonNull(TCreateUserInput),
      },
    },
    resolve: (_source, args) => {
      const { input } = args;
      return {
        user: createUser(input),
      };
    },
  },
  createUsers: {
    type: TCreateUsersPayload,
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TCreateUserInput))),
      },
    },
    resolve: (_source, { input }) => {
      return {
        users: createUsers(input),
      };
    },
  },
};
