import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { TUser, UserRoleEnum } from '../types';
import { getAllUsers } from '../controllers/userControllers';

export const userQueries = {
  getAllUsers: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TUser))),
    resolve: (_source) => {
      const users = getAllUsers();
      return users;
    },
  },
  getUsersByRole: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TUser))),
    args: {
      role: {
        type: UserRoleEnum,
      },
    },
    resolve: (_source, { role }) => {
      if (!role) return [];
      const users = getAllUsers();
      return users.filter((user) => user.role === role);
    },
  },
  getUsersById: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TUser))),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: (_source, { id }) => {
      if (!id) return [];
      const users = getAllUsers();
      return users.filter((user) => user.id === id);
    },
  },
};
