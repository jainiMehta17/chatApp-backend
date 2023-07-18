/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import { Session, User } from './utils/typeorm';
import { getRepository } from 'typeorm';
import { TypeormStore } from 'connect-typeorm';
async function bootstrap() {
  const {PORT, COOKIE_SECRET} = process.env;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const sessionRepository = getRepository(Session)
  app.enableCors({origin:['http://localhost:3001'], credentials:true})
  app.use(session({
    secret:COOKIE_SECRET,
    saveUninitialized:false,
    resave:false,
    cookie:{
      maxAge:86400000 
    },
    store:new TypeormStore().connect(sessionRepository)
  }));
  app.use(passport.initialize());
  app.use(passport.session());
 
  try{
    await app.listen(8000, ()=>console.log(`Running on port ${PORT}`)
    )
  }catch(err){
    console.log(err);
    
  }
}
bootstrap();
