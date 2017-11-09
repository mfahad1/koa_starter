import Router from 'koa-router';
import * as userCtrl from '../controller/users';

const router = new Router({
  prefix: '/user',
});

router.get('/', userCtrl.getAll );
router.get('/:id', userCtrl.get );
router.put('/:id', userCtrl.put );
router.post('/', userCtrl.post );

export default router.routes();