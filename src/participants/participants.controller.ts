/* eslint-disable prettier/prettier */
import { Controller, Inject } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { IParticipantService } from './participant';

@Controller('participants')
export class ParticipantsController {
    constructor(@Inject(Services.PARTICIPANTS) private readonly participantService:IParticipantService){}
   
}
