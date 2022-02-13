import { Module } from '@nestjs/common';

import { GatewayConfigModule } from "@better-api/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ GatewayConfigModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
