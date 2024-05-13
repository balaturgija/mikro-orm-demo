import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  PrimaryKeyProp,
  Property,
} from '@mikro-orm/core';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { v4 } from 'uuid';

import { PortfolioAssetsRepository } from '../repositories/portfolio-assets.repository';

import { PortfolioEntity } from './portfolio.entity';

@Entity({
  tableName: 'portfolio_assets',
  repository: () => PortfolioAssetsRepository,
})
export class PortfolioAssetEntity {
  [EntityRepositoryType]?: PortfolioAssetsRepository;
  [PrimaryKeyProp]?: ['portfolioId', 'assetId'];

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  portfolioId: string;

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  assetId: string;

  @Property({ type: 'numeric(20,10)', default: 0, nullable: false })
  quantity: number;

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date | null;

  /* Associations */
  @ManyToOne(() => PortfolioEntity, { fieldName: 'portfolioId' })
  portfolio: PortfolioEntity;

  @ManyToOne(() => AssetEntity, { fieldName: 'assetId' })
  asset: AssetEntity;
}
