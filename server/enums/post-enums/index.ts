import {
  GraphQLEnumType,
} from 'graphql';

export const PostTagsEnum = new GraphQLEnumType({
  name: 'PostTagsEnum',
  values: {
    FINANCE: {
      value: 'finance',
    },
    TECH: {
      value: 'tech',
    },
    ENVIRONMENTAL: {
      value: 'environmental',
    },
  },
});
