import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { OrderEntity } from 'src/orders/entities/orders.entity';
import { PortfolioEntity } from 'src/portfolios/entities/portfolio.entity';
import { WalletEntity } from 'src/wallets/entities/wallet.entity';
import { v4 } from 'uuid';

import { AccountsRepository } from '../accounts.repository';

@Entity({ tableName: 'accounts', repository: () => AccountsRepository })
export class AccountEntity {
  [EntityRepositoryType]?: AccountsRepository;

  @PrimaryKey({ type: 'uuid', nullable: false, primary: true })
  id: string = v4();

  @Property({ type: 'text', nullable: false })
  username: string;

  @Property({ type: 'text', nullable: false })
  password: string;

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date;

  /* Associations */
  @OneToOne(() => WalletEntity)
  wallet: WalletEntity;

  @OneToOne(() => PortfolioEntity)
  portfolio: PortfolioEntity;

  @OneToMany(() => OrderEntity, (order) => order.account)
  orders = new Collection<OrderEntity>(this);
}
