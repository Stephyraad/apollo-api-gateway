const fs = require('fs');
const path = require('path');
const config = require('dotenv').config;

const environment = process.env.ENVIRONMENT;
if (!environment) throw new Error('ENVIRONMENT is not defined');

const secretsPath = path.resolve(__dirname, `../secrets/.env.${environment}`);
const configsPath = path.resolve(__dirname, `../.env`);

fs.copyFile(secretsPath, configsPath, async (error) => {
  if (error) {
    throw Error('Error building .env configuration file');
  }
  // eslint-disable-next-line no-console
  await console.info(`${environment} configuration successfully copied to .env`);
});

// TODO decrypted/encrypted secrets with some the vault solutions
config({
  path: configsPath,
});
