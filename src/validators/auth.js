import validator from './index';

export const authValidator = (obj) => {
  return validator(obj, {
    properties: {
      username: {
        description: 'username is required',
        message: 'username is required',
        type: 'string',
        required: true
      },
      password: {
        description: 'password is required',
        message: 'passsword is required',
        type: 'string',
        required: true
      }
    }
  })
}
