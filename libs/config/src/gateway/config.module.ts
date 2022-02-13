import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from './config';
import { GatewayConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ config ],
    }),
  ],
  providers: [ ConfigService, GatewayConfigService ],
  exports: [ GatewayConfigService ],
})
export class GatewayConfigModule {}
