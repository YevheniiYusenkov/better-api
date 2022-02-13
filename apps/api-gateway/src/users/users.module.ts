import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@better-api/entities';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CryptoService } from '../crypto/crypto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
  ],
  controllers: [ UsersController ],
  providers: [
    UsersService,
    CryptoService,
  ],
  exports: [ UsersService ],
})

export class UsersModule {}
