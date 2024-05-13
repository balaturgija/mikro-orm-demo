import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { v4 } from 'uuid';

import { OrdersRepository } from '../orders.repository';
import { OrderType } from '../types/order.type';
import { OrderStatus } from '../types/order-status.type';

@Entity({ tableName: 'orders', repository: () => OrdersRepository })
export class OrderEntity {
  [EntityRepositoryType]?: OrdersRepository;

  @PrimaryKey({ type: 'uuid', nullable: false, primary: true })
  id = v4();

  @Property({ type: 'text', nullable: false })
  type: OrderType;

  @Property({ type: 'numeric(20,10)', nullable: false })
  quantity: number;

  @Property({ type: 'numeric(20,10)', nullable: false })
  remainingQuantity: number;

  @Property({ type: 'numeric(20,10)', nullable: false })
  pricePerUnit: number;

  @Property({ type: 'text', nullable: false })
  status: OrderStatus;

  @Property({ type: 'uuid', nullable: false })
  assetId: string;

  @Property({ type: 'uuid', nullable: false })
  accountId: string;

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date | null;

  /* Associations */
  @ManyToOne(() => AssetEntity, { fieldName: 'assetId' })
  asset: AssetEntity;

  @ManyToOne(() => AccountEntity, { fieldName: 'accountId' })
  account: AccountEntity;
}
