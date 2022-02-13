import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GatewayConfigModule } from '@better-api/config';
import { User, Account } from '@better-api/entities';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'better',
      synchronize: true,
      entities: [
        User,
        Account,
      ],
    }),
    GatewayConfigModule,
    UsersModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
