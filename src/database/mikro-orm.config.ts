import { Options } from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export default defineConfig({
  entities: ['./dist/*/entities/*.entity.js'],
  entitiesTs: ['./src/*/entities/*.entity.ts'],
  driver: PostgreSqlDriver,
  // dbName: configService.get('DB_NAME'),
  dbName: 'Test',
  password: 'postgres',
  user: configService.get('DB_USERNAME'),
  // password: configService.get('DB_PASSWORD'),
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  debug: true,
  migrations: {
    path: './src/database/migrations',
  },
  seedes: {
    path: './src/database/seeds',
  },
  extensions: [Migrator, EntityGenerator, SeedManager],
} as Options<PostgreSqlDriver>);
