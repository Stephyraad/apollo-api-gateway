import isEmail from 'validator/lib/isEmail';
import { generateId } from '../../utils';
import users from '../../../mocks/db/users-db';

export const createUser = (input) => {
  if (!input.email) {
    throw new Error('Email input required');
  }
  if (!isEmail(input.email)) {
    throw new Error('Email is not in valid format');
  }

  const newUser = {
    id: generateId(),
    ...input,
  };
  users.unshift(newUser);
  return newUser;
};

export const createUsers = (inputs) => {
  const newUsers = inputs.map((input) => {
    if (!input.email) {
      throw new Error('Email input required');
    }
    if (!isEmail(input.email)) {
      throw new Error('Email is not in valid format');
    }
    return {
      id: generateId(),
      ...input,
    }
  })
  users.push(...newUsers);
  return newUsers;
};

export const getAllUsers = () => users;

export const getUserById = (id) => users.find((user) => user.id === id);
