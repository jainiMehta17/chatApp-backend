/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IParticipantService } from './participant';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { CreateParticipantParams, FindParticipantsParams } from 'src/utils/types';

@Injectable()
export class ParticipantsService implements IParticipantService{
   constructor(@InjectRepository(Participant) private readonly participantRepository:Repository<Participant>){}
    findParticipant(params:FindParticipantsParams): Promise<Participant | null> {
        return this.participantRepository.findOne(params)
    }
    createParticipant(params:CreateParticipantParams): Promise<Participant> {
        const participant = this.participantRepository.create(params);
        return this.participantRepository.save(participant)
    }
}
