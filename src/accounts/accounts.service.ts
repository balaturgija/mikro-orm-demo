import { Injectable } from '@nestjs/common';

import { AccountsRepository } from './accounts.repository';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepository: AccountsRepository) {}

  getById(id: string) {
    return this.accountsRepository.getById(id);
  }
}
