import { Options } from '@mikro-orm/core';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import { ConfigService } from '@nestjs/config';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { OrderEntity } from 'src/orders/entities/orders.entity';
import { PortfolioAssetEntity } from 'src/portfolios/entities/portfolio-asset.entity';
import { PortfolioEntity } from 'src/portfolios/entities/portfolio.entity';
import { WalletEntity } from 'src/wallets/entities/wallet.entity';

const configService = new ConfigService();

export default defineConfig({
  entities: ['./dist/*/entities/*.entity.js'],
  entitiesTs: [
    AccountEntity,
    WalletEntity,
    AssetEntity,
    PortfolioEntity,
    PortfolioAssetEntity,
    OrderEntity,
  ],
  driver: PostgreSqlDriver,
  dbName: 'Test',
  password: 'postgres',
  user: configService.get('DB_USERNAME'),
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
