import { Injectable } from '@nestjs/common';

import { PortfoliosRepository } from '../repositories/portfolios.repository';

@Injectable()
export class PortfoliosService {
  constructor(private readonly portfoliosRepository: PortfoliosRepository) {}
}
