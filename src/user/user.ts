/* eslint-disable prettier/prettier */
import { User } from "src/utils/typeorm";
import { CreateUserDetails, FindUserByParams } from "src/utils/types";

export interface IUserService{
    createUser(userDetails:CreateUserDetails): Promise<User>;
    findUser(findUserByParams:FindUserByParams): Promise<User>;
    saveUser(user:User):Promise<User>;
}