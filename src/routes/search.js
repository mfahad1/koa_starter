import Router from 'koa-router';
import * as searchCtrl from '../controller/search';

const router = new Router();
router.get('/search', searchCtrl.searchCtrl );
router.get('/resetcache', searchCtrl.resetCacheCtrl );

export default router.routes();