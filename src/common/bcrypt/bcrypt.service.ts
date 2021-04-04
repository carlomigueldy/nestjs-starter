import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  SALT = 10;

  async hash(data: string): Promise<string> {
    return await bcrypt.hash(data, this.SALT);
  }

  async compare(data: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(data, encrypted);
  }
}
