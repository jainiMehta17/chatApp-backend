/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt'

export async function hashPassword(rawpassword:string){
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawpassword, salt)
} 

export async function comparePassword(rawPassword:string, hashPassword:string){
    return bcrypt.compare(rawPassword, hashPassword)
}