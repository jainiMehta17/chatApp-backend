/* eslint-disable prettier/prettier */
import { Participant } from "src/utils/typeorm"
import { CreateParticipantParams, FindParticipantsParams } from "src/utils/types"

export interface IParticipantService{
    findParticipant(params:FindParticipantsParams): Promise<Participant | null>
    createParticipant(params:CreateParticipantParams) : Promise<Participant>
}