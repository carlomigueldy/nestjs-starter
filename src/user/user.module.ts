import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { BcryptService } from 'src/common/services/bcrypt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forFeatureAsync([
    //   {
    //     name: User.name,
    //     useFactory: async () => {
    //       const schema = UserSchema;

    //       console.log({ schema: User.name });

    //       schema.plugin(await require('mongoose-hidden'), {
    //         hidden: {
    //           password: true,
    //         },
    //       });

    //       return schema;
    //     },
    //   },
    // ]),
  ],
  providers: [UserService, BcryptService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
