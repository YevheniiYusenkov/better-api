import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UsersModule } from '../users/users.module';
import { CryptoService } from '../crypto/crypto.service';

import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [ UsersModule ],
  providers: [
    AuthService,
    CryptoService,
    LocalStrategy,
  ],
  controllers: [ AuthController ],
})
export class AuthModule {}
