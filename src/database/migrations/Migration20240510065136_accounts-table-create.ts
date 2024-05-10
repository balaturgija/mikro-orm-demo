import { Migration } from '@mikro-orm/migrations';

export class Migration20240510065136_accounts-table-create extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "accounts" ("id" uuid not null default \'ce4d9f9a-aa63-4744-adb5-d51c1cac191f\', "username" text not null, "password" text not null, "created_at" date not null, "updated_at" date not null, "deleted_at" date null, constraint "accounts_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "accounts" cascade;');
  }

}
