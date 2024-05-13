import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';

import { AccountEntity } from './entities/account.entity';

@Injectable()
export class AccountsRepository extends EntityRepository<AccountEntity> {
  getById(id: string) {
    return this.findOne(id);
  }
}
