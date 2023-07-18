/* eslint-disable prettier/prettier */
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./Conversation";

@Entity({name:'participants'})
export class Participant {
@PrimaryGeneratedColumn()
id:number;

@ManyToMany(()=>Conversation, (conversation)=>conversation.participant)
@JoinTable()
conversation:Conversation[]

}