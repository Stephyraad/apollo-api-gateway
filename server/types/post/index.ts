import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
import { PostTagsEnum } from '../../enums';
import { TUser, TDateTime } from '../';

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

// export const TGetPostsByUserIdInput = new GraphQLInputObjectType({
//   name: 'TGetPostsByUserIdInput',
//   description: 'Get posts by user id input type definition',
//   fields: () => ({
//     user: {
//       type: new GraphQLNonNull(TUser),
//     },
//   })
// })

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
