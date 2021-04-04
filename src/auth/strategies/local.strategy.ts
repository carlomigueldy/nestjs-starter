import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserDocument> {
    const user = await this.authService.validateUser(email, password);

    console.log('\n\n\n\n\nLocalStrategy -> validate()', user);
    console.log('\n\n\n\n\n');

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
