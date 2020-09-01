import fs from 'fs';
import path from 'path';
import schema from '../server/schemas';
import { printSchema } from 'graphql/utilities';

const schemasPath = path.resolve(__dirname, `../server/schemas/sdl-schema.graphql`);

fs.writeFile(schemasPath, printSchema(schema), (error) => {
  if (error) {
    throw Error('Error trying to build SDL schema');
  }
  // eslint-disable-next-line no-console
  console.info('SDL schema succesfully generated!');
});
