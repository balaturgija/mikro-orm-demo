import { Injectable } from '@nestjs/common';

import { PortfolioAssetsRepository } from '../repositories/portfolio-assets.repository';

@Injectable()
export class PortfolioAssetsService {
  constructor(
    private readonly portfolioAssetsRepository: PortfolioAssetsRepository,
  ) {}
}
