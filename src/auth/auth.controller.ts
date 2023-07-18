/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { IUserService } from 'src/user/user';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { instanceToPlain } from 'class-transformer';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';
import { Request, Response } from 'express';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.AUTH) private authService:IAuthService,
        @Inject(Services.USERS) private userService:IUserService){
            }
        @Post('register')
        async registerUser(@Body() createUserDto:CreateUserDto){
            return instanceToPlain(await this.userService.createUser(createUserDto))
        }

        @Post('login')
        @UseGuards(LocalAuthGuard)
        loginUser(@Res() res:Response){
            return res.send(HttpStatus.OK)
        }

        @Get('status')
        @UseGuards(AuthenticatedGuard)
        userStatus(@Req() req:Request, @Res() res:Response){
            res.send(req.user)
        }

        @Post('logout')
        logout(){}
}
