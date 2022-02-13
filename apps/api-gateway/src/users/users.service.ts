import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@better-api/entities';

import { CreateUserDTO } from './dto/create.dto';
import { IGetUserPayload } from './interfaces/payload.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async create(data: CreateUserDTO): Promise<User> {
    const user = new User();

    this.repo.merge(user, data);
    await this.repo.save(user);

    return user;
  }

  async user(payload: IGetUserPayload): Promise<User> {
    const user = await this.repo.findOne(payload.id);

    return user;
  }
}
