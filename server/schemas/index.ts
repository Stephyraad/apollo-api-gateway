import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { userQueries, postQueries } from '../queries';
import { userMutations, postMutations } from '../mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
      ...postQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
      ...postMutations,
    }),
  }),
});

export default schema;
