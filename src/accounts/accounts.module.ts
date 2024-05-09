import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AccountEntity } from './entities/account.entity';
import { AccountsRepository } from './accounts.repository';

@Module({
  imports: [MikroOrmModule.forFeature([AccountEntity])],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository],
})
export class AccountsModule {}
