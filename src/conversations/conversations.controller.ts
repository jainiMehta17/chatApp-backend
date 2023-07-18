/* eslint-disable prettier/prettier */
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IConversationService } from './conversations';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { CreateConversationDto } from './dtos/CreateConversation.dto';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm';
import { UserService } from 'src/user/user.service';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
    constructor(@Inject(Services.CONVERSATIONS) private readonly conversationService:IConversationService, 
    ){}
    @Post()
    async createConversation(@AuthUser() user:User, @Body() createConversationPayload:CreateConversationDto){
        this.conversationService.createConversation(user,createConversationPayload)
    }
}
