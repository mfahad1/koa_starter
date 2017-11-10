import * as repo from '../repositories/user'
import * as validator from '../validators/auth'

export const createUser = (payload) => {


  const error = validator.authValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }

  return repo.CreateUser(req);
}

export const findUser = (payload) => {

  const error = validator.authValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }
  return repo.FindUser(req);
  
}