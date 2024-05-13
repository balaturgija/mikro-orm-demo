import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/orders.entity';

@Injectable()
export class OrdersRepository extends EntityRepository<OrderEntity> {}
