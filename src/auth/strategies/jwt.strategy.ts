import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      usernameField: 'email',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.get<string>('JWT_SECRET'),
    });

    console.log('JwtStrategy -> constructor()');
  }

  async validate(payload: any) {
    console.log('JwtStrategy -> validate()', payload);

    return { userId: payload.sub, username: payload.username };
  }
}
