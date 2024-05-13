import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { AssetsRepository } from './assets.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AssetEntity } from './entities/asset.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [AssetEntity] })],
  controllers: [AssetsController],
  providers: [AssetsService, AssetsRepository],
})
export class AssetsModule {}
