import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { PortfolioEntity } from './entities/portfolio.entity';
import { PortfolioAssetEntity } from './entities/portfolio-asset.entity';
import { PortfolioAssetsRepository } from './repositories/portfolio-assets.repository';
import { PortfoliosRepository } from './repositories/portfolios.repository';
import { PortfolioAssetsService } from './services/portfolio-assets.service';
import { PortfoliosService } from './services/portfolios.service';
import { PortfoliosController } from './portfolios.controller';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [PortfolioEntity, PortfolioAssetEntity],
    }),
  ],
  controllers: [PortfoliosController],
  providers: [
    PortfoliosService,
    PortfoliosRepository,
    PortfolioAssetsService,
    PortfolioAssetsRepository,
  ],
})
export class PortfoliosModule {}
