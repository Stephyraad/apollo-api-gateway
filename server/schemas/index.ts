import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { UserQueries, PostQueries } from '../queries';
import { UserMutations, PostMutations } from '../mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UserQueries,
      ...PostQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UserMutations,
      ...PostMutations,
    }),
  }),
});

export default schema;
