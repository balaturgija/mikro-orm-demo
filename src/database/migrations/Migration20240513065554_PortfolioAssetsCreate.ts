import { Migration } from '@mikro-orm/migrations';

export class Migration20240513065554_PortfolioAssetsCreate extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "assets" ("id" uuid not null default \'5a4abc32-dd16-45f6-97c9-42f9f624f7f3\', "symbol" varchar(255) not null, "name" text not null, "current_price" int not null, "market_cap" int not null, constraint "assets_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "portfolios" ("id" uuid not null default \'ecbcfa2b-28a4-405d-a3bf-9b358cf954be\', constraint "portfolios_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "portfolio_assets" ("portfolio_id" uuid not null default \'e82ee9f2-7276-40ba-a0fc-d0a26e17f570\', "asset_id" uuid not null default \'2d7898b8-093d-4612-b09e-4d6a2385d58b\', "quantity" numeric(10,0) not null default 0, "created_at" date not null, "updated_at" date not null, "deleted_at" date null, "portfolioId" uuid not null, "assetId" uuid not null, constraint "portfolio_assets_pkey" primary key ("portfolio_id", "asset_id"));',
    );

    this.addSql(
      'alter table "portfolio_assets" add constraint "portfolio_assets_portfolioId_foreign" foreign key ("portfolioId") references "portfolios" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "portfolio_assets" add constraint "portfolio_assets_assetId_foreign" foreign key ("assetId") references "assets" ("id") on update cascade;',
    );

    this.addSql('alter table "wallets" add column "currency" text not null;');
    this.addSql('alter table "wallets" alter column "id" drop default;');
    this.addSql(
      'alter table "wallets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "wallets" alter column "id" set default \'7bccad63-77df-4ddb-83e4-11c458286dfa\';',
    );

    this.addSql(
      'alter table "accounts" add column "portfolio_id" uuid not null;',
    );
    this.addSql('alter table "accounts" alter column "id" drop default;');
    this.addSql('alter table "accounts" alter column "id" drop default;');
    this.addSql(
      'alter table "accounts" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "accounts" add constraint "accounts_portfolio_id_foreign" foreign key ("portfolio_id") references "portfolios" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "accounts" add constraint "accounts_portfolio_id_unique" unique ("portfolio_id");',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "portfolio_assets" drop constraint "portfolio_assets_assetId_foreign";',
    );

    this.addSql(
      'alter table "portfolio_assets" drop constraint "portfolio_assets_portfolioId_foreign";',
    );

    this.addSql(
      'alter table "accounts" drop constraint "accounts_portfolio_id_foreign";',
    );

    this.addSql('drop table if exists "assets" cascade;');

    this.addSql('drop table if exists "portfolios" cascade;');

    this.addSql('drop table if exists "portfolio_assets" cascade;');

    this.addSql('alter table "wallets" drop column "currency";');

    this.addSql('alter table "wallets" alter column "id" drop default;');
    this.addSql(
      'alter table "wallets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "wallets" alter column "id" set default \'630e1721-2fa3-4a47-a7a7-755c8f0c1e22\';',
    );

    this.addSql(
      'alter table "accounts" drop constraint "accounts_portfolio_id_unique";',
    );
    this.addSql('alter table "accounts" drop column "portfolio_id";');

    this.addSql('alter table "accounts" alter column "id" drop default;');
    this.addSql(
      'alter table "accounts" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "accounts" alter column "id" set default \'428ddc0f-4e11-4871-a4e7-56ed2b45c50f\';',
    );
  }
}
