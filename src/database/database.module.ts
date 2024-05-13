import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import config from './mikro-orm.config';
import { ConfigService } from '@nestjs/config';
import { defineConfig } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return defineConfig({
          ...config,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          dbName: configService.get('DB_NAME'),
          user: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          debug: true,
        });
      },
    }),
  ],
})
export class DatabaseModule {}
