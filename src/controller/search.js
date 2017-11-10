import userModel from '../model/user';
import { search, resetCache } from '../services/search';

// export const signUp = async (ctx , next) => {

//   const payload = {
//     username: ctx.body.username,
//     password: ctx.body.password
//   }
//   const promise = await createUser(payload);
//   ctx.body = promise;

// };


export const searchCtrl = async (ctx) => {
  

  ctx.body = await search(ctx.request.query.search);
};

export const resetCacheCtrl = (ctx) => {
  resetCache(ctx.request.query.destroy)
}