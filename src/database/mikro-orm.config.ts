import { Options } from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import dotenv from 'dotenv';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { OrderEntity } from 'src/orders/entities/orders.entity';
import { PortfolioAssetEntity } from 'src/portfolios/entities/portfolio-asset.entity';
import { PortfolioEntity } from 'src/portfolios/entities/portfolio.entity';
import { WalletEntity } from 'src/wallets/entities/wallet.entity';

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USERNAME, DB_HOST, DB_PORT } = process.env;

export default defineConfig({
  entities: ['./dist/*/entities/*.entity.js'],
  entitiesTs: [
    AccountEntity,
    WalletEntity,
    AssetEntity,
    OrderEntity,
    PortfolioEntity,
    PortfolioAssetEntity,
  ],
  driver: PostgreSqlDriver,
  dbName: DB_NAME,
  password: DB_PASSWORD,
  user: DB_USERNAME,
  host: DB_HOST,
  port: parseInt(DB_PORT),
  debug: true,
  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
  },
  seedes: { path: './dist/database/seeds', pathTs: './src/database/seeds' },
  metadataCache: { options: { cacheDir: './src/database/metadata-cache' } },
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator, EntityGenerator, SeedManager],
} as Options<PostgreSqlDriver>);
