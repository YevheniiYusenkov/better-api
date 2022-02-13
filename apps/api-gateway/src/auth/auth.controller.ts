import { Controller, Post, Body } from '@nestjs/common';

import { ILoginPayload } from './interfaces/payload.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService){}

  @Post()
  async login(@Body() data: ILoginPayload) {
    return;
  }
}
