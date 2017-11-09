import routerAuth from './auth';
import routerUser from './users';
import compose from 'koa-compose';

export default () => compose([
    routerAuth,
    routerUser,
]);