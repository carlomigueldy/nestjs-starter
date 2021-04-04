import { IsNotEmpty, IsEmail, MaxLength, MinLength } from 'class-validator';

export class BaseAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(64)
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
