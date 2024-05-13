import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { v4 } from 'uuid';

import { PortfoliosRepository } from '../repositories/portfolios.repository';

import { PortfolioAssetEntity } from './portfolio-asset.entity';

@Entity({ tableName: 'portfolios', repository: () => PortfoliosRepository })
export class PortfolioEntity {
  [EntityRepositoryType]?: PortfoliosRepository;

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  id: string = v4();

  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'date', default: null, nullable: true })
  deletedAt?: Date | null;

  /* Associations */
  @OneToOne(() => AccountEntity, (account) => account.portfolio)
  account: AccountEntity;

  @OneToMany(() => PortfolioAssetEntity, 'portfolio')
  portfolioAssets = new Collection<PortfolioAssetEntity>(this);
}
