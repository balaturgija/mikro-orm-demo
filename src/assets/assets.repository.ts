import { EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { AssetEntity } from './entities/asset.entity';

@Injectable()
export class AssetsRepository extends EntityRepository<AssetEntity> {}
