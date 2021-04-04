import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from 'src/common/base-model';

export type UserDocument = User & Document;

@Schema()
export class User extends BaseModel {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  middleName?: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, minlength: 6, maxlength: 32 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
