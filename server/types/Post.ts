import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
import { TUser, TDateTime } from './';

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

export const TTags = new GraphQLObjectType({
  name: 'TTags',
  description: 'Tags type definition',
  fields: () => ({
    tags: {
      type: new GraphQLList(PostTagsEnum),
    },
  }),
});

export const TPost = new GraphQLObjectType({
  name: 'TPost',
  description: 'Post type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: new GraphQLNonNull(TUser),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tags: {
      type: TTags,
    },
    isPublished: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: new GraphQLNonNull(TDateTime),
    },
    updatedAt: {
      type: TDateTime,
    },
    publishedAt: {
      type: TDateTime,
    },
  }),
});

export const TCreatePostInput = new GraphQLInputObjectType({
  name: 'TCreatePostInput',
  description: 'Create post input type definition',
  fields: () => ({
    user: {
      type: new GraphQLNonNull(TUser),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tags: {
      type: new GraphQLList(PostTagsEnum),
      defautValue: [],
    },
    isPublished: {
      type: GraphQLBoolean,
    },
  }),
});

export const TCreatePostPayload = new GraphQLObjectType({
  name: 'TCreatePostPayload',
  description: 'Create post payload type definition',
  fields: () => ({
    post: {
      type: new GraphQLNonNull(TPost),
    },
  }),
});
