/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDetails, FindUserByParams } from 'src/utils/types';
import { IUserService } from './user';
import { User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/helper';

@Injectable()
export class UserService implements IUserService{
    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}
    async createUser(userDetails:CreateUserDetails) {
        const existingUser = await this.userRepository.findOne({email:userDetails.email})
        if(existingUser) throw new HttpException('User Already Exists', HttpStatus.CONFLICT)
        const password = await hashPassword(userDetails.password)
        const newUser = this.userRepository.create({...userDetails, password})
        return await this.userRepository.save(newUser)
    }
    async findUser(findUserByParams: FindUserByParams): Promise<User> {
        return this.userRepository.findOne(findUserByParams, {
            relations:['participant']
        })
    }
    async saveUser(user:User){
        return this.userRepository.save(user)
    }
}
