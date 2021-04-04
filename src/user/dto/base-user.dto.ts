import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class BaseUserDto {
  @IsNotEmpty()
  firstName: string;

  middleName?: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(64)
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
