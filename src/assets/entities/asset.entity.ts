import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { AssetsRepository } from '../assets.repository';
import { PortfolioAssetEntity } from 'src/portfolios/entities/portfolio-asset.entity';
import { OrderEntity } from 'src/orders/entities/orders.entity';

@Entity({ tableName: 'assets', repository: () => AssetsRepository })
export class AssetEntity {
  [EntityRepositoryType]?: AssetsRepository;

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  id = v4();

  @Property({ type: 'varchar(3)', nullable: false })
  symbol: string;

  @Property({ type: 'text', nullable: false })
  name: string;

  @Property()
  currentPrice: number;

  @Property()
  marketCap: number;

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date | null;

  /* Associations */
  @OneToMany(() => PortfolioAssetEntity, 'asset')
  portfolioAssets = new Collection<PortfolioAssetEntity>(this);

  @OneToMany(() => OrderEntity, (order) => order.asset)
  orders = new Collection<OrderEntity>(this);
}
