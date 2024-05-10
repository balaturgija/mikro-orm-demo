import {
  Entity,
  EntityRepositoryType,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { AccountsRepository } from '../accounts.repository';
import { WalletEntity } from 'src/wallets/entities/wallet.entity';

@Entity({ tableName: 'accounts', repository: () => AccountsRepository })
export class AccountEntity {
  [EntityRepositoryType]?: AccountsRepository;

  @PrimaryKey({
    type: 'uuid',
    default: v4(),
    nullable: false,
    primary: true,
  })
  id: string = v4();

  @Property({
    type: 'text',
    nullable: false,
  })
  username: string;

  @Property({
    type: 'text',
    nullable: false,
  })
  password: string;

  @Property({
    type: 'date',
    onCreate: () => new Date(),
  })
  createdAt = new Date();

  @Property({
    type: 'date',
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();

  @Property({
    type: 'date',
    default: null,
    nullable: true,
  })
  deletedAt?: Date;

  @OneToOne(() => WalletEntity)
  wallet: WalletEntity;
}
