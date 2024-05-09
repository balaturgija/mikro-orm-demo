import { MikroOrmModule } from '@mikro-orm/nestjs';
import { FlushMode, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        entities: ['./dist/*/entities/*.entity.js'],
        entitiesTs: ['./src/*/entities/*.entity.ts'],
        driver: PostgreSqlDriver,
        dbName: configService.get('DB_NAME'),
        user: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        flushMode: FlushMode.ALWAYS,
        migrations: {
          pathTs: './src/database/migrations',
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
