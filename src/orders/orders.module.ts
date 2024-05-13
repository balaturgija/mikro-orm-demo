import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OrderEntity } from './entities/orders.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [OrderEntity] })],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
