import { Options } from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USERNAME, DB_HOST, DB_PORT } = process.env;

export default defineConfig({
  driver: PostgreSqlDriver,
  dbName: DB_NAME,
  password: DB_PASSWORD,
  user: DB_USERNAME,
  host: DB_HOST,
  port: parseInt(DB_PORT),
  extensions: [EntityGenerator],
} as Options<PostgreSqlDriver>);
