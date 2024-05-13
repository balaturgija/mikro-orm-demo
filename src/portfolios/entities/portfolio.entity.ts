import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  OneToOne,
  PrimaryKey,
} from '@mikro-orm/core';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { v4 } from 'uuid';
import { PortfolioAssetEntity } from './portfolio-asset.entity';
import { PortfoliosRepository } from '../repositories/portfolios.repository';

@Entity({ tableName: 'portfolios', repository: () => PortfoliosRepository })
export class PortfolioEntity {
  [EntityRepositoryType]?: PortfoliosRepository;

  @PrimaryKey({ type: 'uuid', default: v4(), nullable: false, primary: true })
  id: string = v4();

  @OneToOne(() => AccountEntity, (account) => account.portfolio)
  account: AccountEntity;

  @OneToMany(() => PortfolioAssetEntity, 'portfolio')
  portfolioAssets = new Collection<PortfolioAssetEntity>(this);
}
