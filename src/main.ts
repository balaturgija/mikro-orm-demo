import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription(
      'Mikro orm and web sockets example. \n\nLink to OpenAPI specification: [openApi](/docs-json)',
    )
    .setVersion('1');

  const document = SwaggerModule.createDocument(app, config.build());

  SwaggerModule.setup(`docs`, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      jsonDocumentUrl: '/docs-json',
    },
  });

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get('WEB_URL'),
  });

  await app.listen(configService.get('API_PORT'));
}

bootstrap();
