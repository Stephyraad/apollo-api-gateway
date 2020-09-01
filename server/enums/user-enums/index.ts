import {
  GraphQLEnumType,
} from 'graphql';

export const UserRoleEnum = new GraphQLEnumType({
  name: 'UserRoleEnum',
  values: {
    ADMIN: {
      value: 0,
    },
    MODERATOR: {
      value: 1,
    },
    WRITER: {
      value: 2,
    },
    READER: {
      value: 3,
    },
  },
});
