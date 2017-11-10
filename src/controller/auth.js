import userModel from '../model/user';
import * as validator from '../validators/auth';
import { createUser, findUser } from '../services/auth'

export const signUp = async (ctx , next) => {

  const payload = {
    username: ctx.body.username,
    password: ctx.body.password
  }
  const promise = await createUser(payload);
  ctx.body = promise;

};


export const signIn = async (ctx) => {
  
  const payload = {
    username: ctx.body.username,
    password: ctx.body.password
  }
  const promise = await findUser(payload);
  ctx.body = promise;
 
};