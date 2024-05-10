import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletsRepository } from './wallets.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { WalletEntity } from './entities/wallet.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [WalletEntity] })],
  controllers: [WalletsController],
  providers: [WalletsService, WalletsRepository],
})
export class WalletsModule {}
