/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports:[UserModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
    provide:Services.AUTH,
    useClass:AuthService
  }]
})
export class AuthModule {}
