import { Migration } from '@mikro-orm/migrations';

export class Migration20240510102948 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "wallets" ("id" uuid not null default \'160da5ec-7f2c-4374-82e8-a5eb1987712c\', "balance" numeric(10,0) not null default 0, "created_at" date not null, "updated_at" date not null, "deleted_at" date null, constraint "wallets_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "accounts" ("id" uuid not null default \'b9a56770-70ea-4735-b6fc-b17f7b6cda8e\', "username" text not null, "password" text not null, "created_at" date not null, "updated_at" date not null, "deleted_at" date null, "wallet_id" uuid not null, constraint "accounts_pkey" primary key ("id"));',
    );
    this.addSql(
      'alter table "accounts" add constraint "accounts_wallet_id_unique" unique ("wallet_id");',
    );

    this.addSql(
      'alter table "accounts" add constraint "accounts_wallet_id_foreign" foreign key ("wallet_id") references "wallets" ("id") on update cascade;',
    );
  }
}
