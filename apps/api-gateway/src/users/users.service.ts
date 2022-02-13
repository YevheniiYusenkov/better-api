import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import { User } from '@better-api/entities';

import { CreateUserDTO } from './dto/create.dto';
import { IGetUserPayload } from './interfaces/payload.interface';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    private readonly cryptoService: CryptoService,
  ) {}

  async create(data: CreateUserDTO): Promise<User> {
    const user = new User();

    data.password = await this.cryptoService.hash(data.password);

    this.repo.merge(user, data);
    await this.repo.save(user);

    return user;
  }

  async user(payload: IGetUserPayload, options?: FindOneOptions<User>): Promise<User> {
    const user = await this.repo.findOne({ isDeleted: false, ...payload }, options);

    return user;
  }
}
