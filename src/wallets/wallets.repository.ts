import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';

import { WalletEntity } from './entities/wallet.entity';

@Injectable()
export class WalletsRepository extends EntityRepository<WalletEntity> {}
