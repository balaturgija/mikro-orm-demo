import {
  Entity,
  EntityRepositoryType,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { v4 } from 'uuid';

import { WalletsRepository } from '../wallets.repository';

@Entity({ tableName: 'wallets', repository: () => WalletsRepository })
export class WalletEntity {
  [EntityRepositoryType]?: WalletsRepository;

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  id = v4();

  @Property({ type: 'numeric(10,2)', default: 0, nullable: false })
  balance = 0;

  @Property({ type: 'text', nullable: false })
  currency: string;

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date | null;

  /* Associations */
  @OneToOne(() => AccountEntity, (account) => account.wallet)
  account: AccountEntity;
}
