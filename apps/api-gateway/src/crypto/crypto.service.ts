import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  async hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(data, salt);
  }

  async compare(data: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(data, hash);
  }
}
