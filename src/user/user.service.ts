import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseServiceInterface } from 'src/common/base-service.interface';
import { BcryptService } from 'src/common/bcrypt/bcrypt.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService implements BaseServiceInterface<UserDocument> {
  constructor(
    @InjectModel(User.name) private model: Model<UserDocument>,
    private readonly bcrypt: BcryptService,
  ) {}

  async all(): Promise<UserDocument[]> {
    return await this.model.find({ deletedAt: null }).exec();
  }

  async find(id: string): Promise<UserDocument> {
    return await this.model.findOne({ _id: id, deletedAt: null }).exec();
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return await this.model.findOne({ email, deletedAt: null }).exec();
  }

  async create(createDto: CreateUserDto): Promise<UserDocument> {
    return await new this.model({
      ...createDto,
      password: await this.bcrypt.hash(createDto.password),
    }).save();
  }

  async update(id: string, updateDto: UpdateUserDto): Promise<UserDocument> {
    return await this.model.findByIdAndUpdate(id, updateDto).exec();
  }

  async delete(id: string): Promise<UserDocument> {
    return await this.model.findByIdAndUpdate(id, { deletedAt: null }).exec();
  }

  async forceDelete(id: string): Promise<UserDocument> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
