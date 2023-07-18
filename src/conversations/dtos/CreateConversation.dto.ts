/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConversationDto {
    @IsNumber()
    @IsNotEmpty()
    authorId:number;

    @IsNumber()
    @IsNotEmpty()
    recipientId:number;

    @IsString()
    message:string;
}