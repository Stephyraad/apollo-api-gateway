import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
import { TDateTime } from './custom';

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

export const TUser = new GraphQLObjectType({
  name: 'TUser',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLNonNull(UserRoleEnum),
    },
    createdAt: {
      type: new GraphQLNonNull(TDateTime),
    },
    updatedAt: {
      type: TDateTime,
    },
  }),
});

export const TCreateUserPayload = new GraphQLObjectType({
  name: 'TCreateUserPayload',
  description: 'Create user payload type definition',
  fields: () => ({
    user: {
      type: new GraphQLNonNull(TUser),
    },
  }),
});

export const TCreateUsersPayload = new GraphQLObjectType({
  name: 'TCreateUsersPayload',
  description: 'Create users payload type definition',
  fields: () => ({
    users: {
      type: new GraphQLList(TUser),
    },
  }),
});

export const TCreateUserInput = new GraphQLInputObjectType({
  name: 'TCreateUserInput',
  description: 'Create user input type definition',
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    role: {
      type: UserRoleEnum,
      defaultValue: UserRoleEnum.getValue('READER').value,
    },
  }),
});
