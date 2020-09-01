import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { TUser } from '../../types';
import { UserRoleEnum } from '../../enums';
import { getAllUsers } from '../../controllers/user-controllers';

export const UserQueries = {
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
        type:  new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: (_source, { id }) => {
      if (!id) return [];
      const users = getAllUsers();
      return users.filter((user) => user.id === id);
    },
  },
};
