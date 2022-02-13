import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { User } from '@better-api/entities';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
  ) {}

  async validate(phoneNumber: string, password: string): Promise<User> {
    const user = await this.usersService.user({ phoneNumber });

    if (await this.cryptoService.compare(password, user?.password)) {
      return user;
    }

    return null;
  }
}
