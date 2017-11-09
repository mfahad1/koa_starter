import userModel from '../model/user';
import * as validator from '../validators/auth';
import { createUser, findUser } from '../services/auth'

export const signUp = async (ctx , next) =>  {


  

  
  // const error = validator.signUpValidator(userReq);
  // console.log("error::::", error);
  // if(error)
  //   return ctx.throw(404, error);
   
  // const user = new userModel(userReq);
  // const promise = await user.save();
  // ctx.body = promise;
  const payload = {
    username: ctx.body.username,
    pass
  }
    const promise = await createUser(ctx.request.body);
    ctx.body = promise;

};


export const signIn = async (ctx) =>  {
  
  const promise = await findUser(ctx.request.body);
  ctx.body = promise;
 

};