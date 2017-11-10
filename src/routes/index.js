import routerAuth from './auth';
import routerUser from './users';
import routerSearch from './search';
import compose from 'koa-compose';

export default () => compose([
    routerAuth,
    routerUser,
    routerSearch,
]);