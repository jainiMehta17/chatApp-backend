/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from 'src/utils/typeorm/entities/Conversation';
import { Participant } from 'src/utils/typeorm/entities/Participant';
import { ParticipantsModule } from 'src/participants/participants.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([Conversation, Participant]), ParticipantsModule, UserModule],
  controllers: [ConversationsController],
  providers: [{
    provide:Services.CONVERSATIONS,
    useClass:ConversationsService
  }]
})
export class ConversationsModule {}
