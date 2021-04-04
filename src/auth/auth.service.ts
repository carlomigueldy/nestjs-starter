import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this.userService.findByEmail(email);

    if (!user) return null;

    if (await bcrypt.compare(password, user.password)) return user;

    return null;
  }

  async login(user: UserDocument) {
    const payload = { username: user.email, sub: user._id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
