import { Controller } from '@nestjs/common';
import { PortfoliosService } from './services/portfolios.service';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}
}
