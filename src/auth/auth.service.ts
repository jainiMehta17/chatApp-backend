/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { ValidateUserDetails } from 'src/utils/types';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { comparePassword } from 'src/utils/helper';

@Injectable()
export class AuthService implements IAuthService{
    constructor(@Inject(Services.USERS) private readonly userService:IUserService ){}
   async validateUser(userDetails:ValidateUserDetails){
    const user = await this.userService.findUser({email:userDetails.email});
    if(!user) throw new HttpException("Invalid Credentials", HttpStatus.UNAUTHORIZED)
    const isValidPassword =   comparePassword(userDetails.password, user.password)
   ;
    return isValidPassword ? user : null;
    }
}
