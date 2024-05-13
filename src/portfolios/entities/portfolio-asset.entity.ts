import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  PrimaryKeyProp,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { PortfolioEntity } from './portfolio.entity';
import { AssetEntity } from 'src/assets/entities/asset.entity';
import { PortfolioAssetsRepository } from '../repositories/portfolio-assets.repository';

@Entity({
  tableName: 'portfolio_assets',
  repository: () => PortfolioAssetsRepository,
})
export class PortfolioAssetEntity {
  [EntityRepositoryType]?: PortfolioAssetsRepository;

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

  @ManyToOne(() => PortfolioEntity, { fieldName: 'portfolioId' })
  portfolio: PortfolioEntity;

  @ManyToOne(() => AssetEntity, { fieldName: 'assetId' })
  asset: AssetEntity;

  [PrimaryKeyProp]?: ['portfolioId', 'assetId'];
}
