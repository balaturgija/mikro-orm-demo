import { Module } from '@nestjs/common';

import { SpotGateway } from './spot.gateway';

@Module({
  providers: [SpotGateway],
})
export class MarketModule {}
