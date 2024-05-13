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

  @OneToMany(() => PortfolioAssetEntity, 'asset')
  portfolioAssets = new Collection<PortfolioAssetEntity>(this);
}
