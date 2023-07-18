/* eslint-disable prettier/prettier */
import { User } from "./typeorm";

export type CreateUserDetails = {
    email:string;
    firstName:string;
    lastName:string;
    password:string;
}

export type ValidateUserDetails = {
    email:string;
    password:string;
}

export type FindUserByParams = Partial<{
    id:number;
    email:string;
}>

export type CreateConversationParams = {
    authorId:number;
    recipientId:number;
    message:string;
}

export type FindParticipantsParams = Partial<{
    id:number;
}>

export interface AuthenticatedRequest extends Request{
    user:User
    
}
export type CreateParticipantParams = {
id:number
}