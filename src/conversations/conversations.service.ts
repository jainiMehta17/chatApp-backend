/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { IConversationService } from './conversations';
import { CreateConversationParams } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation, Participant, User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { Services } from 'src/utils/constants';
import { IParticipantService } from 'src/participants/participant';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ConversationsService implements IConversationService{
    constructor(
        @InjectRepository(Conversation) private readonly conversationRepository:Repository<Conversation>,
        @Inject(Services.PARTICIPANTS) private readonly participantService:IParticipantService,
        @Inject(Services.USERS) private readonly userService:UserService
        ){}
    async createConversation(user:User,createConversationParams:CreateConversationParams) {
        const userDB= await this.userService.findUser({id:user.id})     

        if(!userDB.participant){
           const newParticipant = await this.participantService.createParticipant({id:createConversationParams.authorId})
           userDB.participant = newParticipant;
           await this.userService.saveUser(userDB)
        }
        const recipient = await this.participantService.findParticipant({id:createConversationParams.recipientId})
    }
}
