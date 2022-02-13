import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { User } from '@better-api/entities';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public async validate(phoneNumber: string, password: string): Promise<User> {
    const user = await this.usersService.user(
      { phoneNumber },
      {
        select: [
          'password',
          'createdAt',
          'updatedAt',
          'phoneNumber',
          'accounts',
          'language',
          'id',
        ],
    });

    if (user && user.password === password) {
      const { password, ...other } = user;

      return other as User;
    }

    return null;
  }
}
