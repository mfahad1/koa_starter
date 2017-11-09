import Router from 'koa-router';
import * as authCtrl from '../controller/auth';

const routerAuth = new Router();
routerAuth.post('/auth/signup', authCtrl.signUp);
routerAuth.post('/auth/signin', authCtrl.signIn);

export default routerAuth.routes();