import { Module } from '@nestjs/common';
import { PortfoliosService } from './services/portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { PortfoliosRepository } from './repositories/portfolios.repository';
import { PortfolioAssetsService } from './services/portfolio-assets.service';
import { PortfolioAssetsRepository } from './repositories/portfolio-assets.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PortfolioEntity } from './entities/portfolio.entity';
import { PortfolioAssetEntity } from './entities/portfolio-asset.entity';

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
