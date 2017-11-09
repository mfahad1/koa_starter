import routerAuth from './auth';
import compose from 'koa-compose';

export default () => compose([
    routerAuth,
]);