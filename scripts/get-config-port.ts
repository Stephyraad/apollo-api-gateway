import { config } from 'dotenv';
import path from 'path';

export const { ENVIRONMENT } = process.env;

if (!ENVIRONMENT) throw new Error('ENVIRONMENT is not defined');

const DIR = path.resolve(__dirname,  '../');

// secrets should decrypted/encrypted with some the vault solutions
config({
  path: `${DIR}/secrets/.env.${ENVIRONMENT}`,
});


export const { PORT } = process.env;
