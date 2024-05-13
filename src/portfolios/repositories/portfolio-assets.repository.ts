import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';

import { PortfolioAssetEntity } from '../entities/portfolio-asset.entity';

@Injectable()
export class PortfolioAssetsRepository extends EntityRepository<PortfolioAssetEntity> {}
