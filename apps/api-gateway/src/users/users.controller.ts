import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { CreateUserDTO } from './dto/create.dto';
import { UsersService } from './users.service';
import { IGetUserPayload } from './interfaces/payload.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.service.create(data);
  }

  @Get()
  async user(@Query() payload: IGetUserPayload) {
    return await this.service.user(payload);
  }
}
