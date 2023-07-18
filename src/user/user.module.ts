/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/utils/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [{
    provide:Services.USERS,
    useClass:UserService,
  }],
  exports:[
    {
      provide:Services.USERS,
      useClass:UserService,
    }
  ]
})
export class UserModule {}
