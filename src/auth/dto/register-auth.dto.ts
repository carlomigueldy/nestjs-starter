import { IsNotEmpty } from 'class-validator';
import { BaseAuthDto } from './base-auth.dto';

export class RegisterAuthDto extends BaseAuthDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
