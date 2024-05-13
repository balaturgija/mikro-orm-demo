import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';

import { PortfolioEntity } from '../entities/portfolio.entity';

@Injectable()
export class PortfoliosRepository extends EntityRepository<PortfolioEntity> {}
