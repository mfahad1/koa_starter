import userModel from '../model/user';

export const CreateUser = (payload) => {
  const user = new userModel(payload);
  return user.save();
}

export const FindUser = (payload) => {
  return userModel.findOne(payload);
}