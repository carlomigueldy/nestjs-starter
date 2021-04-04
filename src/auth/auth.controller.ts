import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDocument } from 'src/user/schemas/user.schema';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: Request) {
    const user = request.user as UserDocument;
    return await this.service.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Req() request: Request) {
    console.log('User');

    return request.user;
  }
}
