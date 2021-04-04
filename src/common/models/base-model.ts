import { Prop, Schema } from '@nestjs/mongoose';
import { BaseModelInterface } from '../interfaces/base-model.interface';

@Schema()
export class BaseModel implements BaseModelInterface {
  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;
}
