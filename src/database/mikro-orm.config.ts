import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export default {
  entities: ['dist/src/*/entities/*.entity.js'],
  entitiesTs: ['src/*/entities/*.entity.ts'],
  driver: PostgreSqlDriver,
  dbName: configService.get('DB_NAME'),
  user: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  debug: true,
  migrations: {
    path: './src/database/migrations',
  },
} as Options;
