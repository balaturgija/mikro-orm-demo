import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { CommonExceptionFilter } from './common/filters/common-exception.filter';
import { RequestBodyValidationPipe } from './common/pipes/request-body.validation.pipe';
import { RequestQueryValidationPipe } from './common/pipes/request-query.validation.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new RequestBodyValidationPipe(),
    new RequestQueryValidationPipe(),
  );

  app.useGlobalFilters(new CommonExceptionFilter());

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
