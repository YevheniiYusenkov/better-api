import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';

import { User } from '@better-api/entities';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'phoneNumber', passwordField: 'password' });
  }

  async validate(phoneNumber: string, password: string): Promise<User> {
    const user = await this.authService.validate(phoneNumber, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
