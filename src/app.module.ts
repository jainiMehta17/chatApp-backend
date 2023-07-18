/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './utils/typeorm';
import { Passport } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { ConversationsModule } from './conversations/conversations.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({envFilePath:".env.development"}),
    PassportModule.register({session:true}),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.MYSQL_DB_HOST,
      port:parseInt(process.env.MYSQL_DB_PORT),
      username:process.env.MYSQL_DB_USER,
      password:process.env.MYSQL_DB_PASSWORD,
      database:process.env.MYSQL_DB_NAME,
      synchronize:true,
      entities,  
    }),
    ConversationsModule,
    ParticipantsModule,
    
  ],

})
export class AppModule {}
