import { Module } from '@nestjs/common';

import { GatewayConfigModule } from '@better-api/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    GatewayConfigModule,
    UsersModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
