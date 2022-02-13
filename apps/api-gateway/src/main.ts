import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { GatewayConfigService } from "@better-api/config";

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  const config = app.get<GatewayConfigService>(GatewayConfigService);

  app.setGlobalPrefix('api');

  await app.listen(config.port);

  Logger.log(
    `🚀 Application is running on: ${config.protocol}://${config.host}:${config.port}/${config.prefix}`
  );
}

bootstrap();
