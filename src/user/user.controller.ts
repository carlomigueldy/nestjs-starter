import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BaseControllerInterface } from 'src/common/interfaces/base-controller.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async all(): Promise<UserDocument[]> {
    return await this.service.all();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<UserDocument> {
    return await this.service.find(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    return await this.service.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: any,
  ): Promise<UserDocument> {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDocument> {
    return await this.service.delete(id);
  }

  @Delete(':id')
  async forceDelete(@Param('id') id: string): Promise<UserDocument> {
    return await this.service.delete(id);
  }
}
