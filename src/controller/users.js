import userModel from '../model/user';

export const getAll = async (ctx) =>  {

  try {
    const promise = await userModel.find({});
    ctx.body = promise;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }

};


export const get = async (ctx) =>  {

  try {
    const promise = await userModel.findOne({ _id: ctx.params.id });
    promise ? ctx.body = promise : ctx.throw(404,'no record found');
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }

};

export const put = async (ctx) =>  {
  
  const user = {};
  if(ctx.request.body.username) {
    user.username = ctx.request.body.username;
  } 
  if(ctx.request.body.password) {
    user.password = ctx.request.body.password;
  }

  try {
    !(ctx.request.body.username || ctx.request.body.password) && ctx.throw(404,'username or pass is required');
    const promise = await userModel.findOneAndUpdate({ _id: ctx.params.id } , { $set: user } );
    promise ? ctx.body = promise : ctx.throw(404,'no record found');
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }

};

export const post = async (ctx) =>  {
  
  const user = new userModel({
    username: ctx.request.body.username,
    password: ctx.request.body.password
  });

  try {
    !(ctx.request.body.username && ctx.request.body.password) && ctx.throw(404,'username and pass is required');
    const promise = await user.save();
    ctx.body = promise;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
  
};