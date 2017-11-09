import userModel from '../model/user';

export const signUp = async (ctx) =>  {

  const user = new userModel({
    username: ctx.request.body.username,
    password: ctx.request.body.password
  });

  try {
    !(ctx.request.body.username && ctx.request.body.password) && ctx.throw(404,'username and pass is required');;
    const promise = await user.save();
    ctx.body = promise;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }

};


export const signIn = async (ctx) =>  {
  const req = {
    username : ctx.request.body.username,
    password : ctx.request.body.password,
  }


  try {
    const promise = await userModel.findOne(req);
    promise ? ctx.body = promise : ctx.throw(404,'no record found');
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }

};