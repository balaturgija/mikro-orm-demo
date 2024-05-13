import { Migration } from '@mikro-orm/migrations';

export class Migration20240513071920_OrdersCreate extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "orders" ("id" uuid not null, "type" text not null, "quantity" numeric(10,0) not null, "remaining_quantity" numeric(10,0) not null, "price_per_unit" numeric(10,0) not null, "status" text not null, "asset_id" uuid not null, "account_id" uuid not null, "assetId" uuid not null, "accountId" uuid not null, constraint "orders_pkey" primary key ("id"));',
    );

    this.addSql(
      'alter table "orders" add constraint "orders_assetId_foreign" foreign key ("assetId") references "assets" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "orders" add constraint "orders_accountId_foreign" foreign key ("accountId") references "accounts" ("id") on update cascade;',
    );

    this.addSql('alter table "assets" alter column "id" drop default;');
    this.addSql(
      'alter table "assets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "assets" alter column "id" set default \'a5c46a36-4a49-43b2-885e-4b5d37997e6d\';',
    );

    this.addSql('alter table "portfolios" alter column "id" drop default;');
    this.addSql(
      'alter table "portfolios" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolios" alter column "id" set default \'53964d99-6be7-4b9b-a823-6f3ae47058a4\';',
    );

    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" type uuid using ("portfolio_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" set default \'fa0b199d-2757-4268-8f18-b635e25f0b1c\';',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" type uuid using ("asset_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" set default \'84b7f745-6d52-4205-b618-665eea63010c\';',
    );

    this.addSql('alter table "wallets" alter column "id" drop default;');
    this.addSql(
      'alter table "wallets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "wallets" alter column "id" set default \'afa13209-8728-459f-8ff5-46b6325fa380\';',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "orders" cascade;');

    this.addSql('alter table "assets" alter column "id" drop default;');
    this.addSql(
      'alter table "assets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "assets" alter column "id" set default \'5a4abc32-dd16-45f6-97c9-42f9f624f7f3\';',
    );

    this.addSql('alter table "portfolios" alter column "id" drop default;');
    this.addSql(
      'alter table "portfolios" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolios" alter column "id" set default \'ecbcfa2b-28a4-405d-a3bf-9b358cf954be\';',
    );

    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" type uuid using ("portfolio_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" set default \'e82ee9f2-7276-40ba-a0fc-d0a26e17f570\';',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" type uuid using ("asset_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" set default \'2d7898b8-093d-4612-b09e-4d6a2385d58b\';',
    );

    this.addSql('alter table "wallets" alter column "id" drop default;');
    this.addSql(
      'alter table "wallets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "wallets" alter column "id" set default \'7bccad63-77df-4ddb-83e4-11c458286dfa\';',
    );
  }
}
