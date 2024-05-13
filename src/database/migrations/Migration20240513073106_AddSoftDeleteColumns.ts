import { Migration } from '@mikro-orm/migrations';

export class Migration20240513073106_AddSoftDeleteColumns extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "assets" alter column "id" drop default;');
    this.addSql(
      'alter table "assets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "assets" alter column "id" set default \'5d40992d-bb28-4a33-b897-40eb01aedaf8\';',
    );

    this.addSql('alter table "portfolios" alter column "id" drop default;');
    this.addSql(
      'alter table "portfolios" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolios" alter column "id" set default \'8dc5a557-683f-4aaa-8d55-4253add96a78\';',
    );

    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" type uuid using ("portfolio_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "portfolio_id" set default \'768fcaf0-750e-409f-bc86-bc299308780b\';',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" drop default;',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" type uuid using ("asset_id"::text::uuid);',
    );
    this.addSql(
      'alter table "portfolio_assets" alter column "asset_id" set default \'bd34145f-2a47-40ea-896c-9ffac288ecd0\';',
    );

    this.addSql('alter table "wallets" alter column "id" drop default;');
    this.addSql(
      'alter table "wallets" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql(
      'alter table "wallets" alter column "id" set default \'8f99cdbf-4423-4cb7-8991-cd818fcd1d76\';',
    );
  }

  async down(): Promise<void> {
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
}
