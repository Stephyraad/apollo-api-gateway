import express from 'express';
import apolloServer from './apolloServer';

const PORT = process.env.PORT || 4000;

const app = express();
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`\n\nApollo server listening on http://localhost:${PORT}/graphql \n`);
});
