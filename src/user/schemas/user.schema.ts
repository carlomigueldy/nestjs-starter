import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from 'src/common/models/base-model';

export type UserDocument = User & Document;

@Schema()
export class User extends BaseModel {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  middleName?: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, minlength: 6 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
