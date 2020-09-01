import { ApolloServer } from 'apollo-server-express';
import schema from './schemas';

const apolloServer = new ApolloServer({
  schema,
});

export default apolloServer;
