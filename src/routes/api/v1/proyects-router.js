import { Router } from 'express';

import { authJwt } from '../../../middlewares';
import * as proyectCtrl from '../../../controllers/proyects-controller';

const router = Router();

router.get( '/', proyectCtrl.getProyects );
router.get( '/:id', proyectCtrl.getProyect );
router.get( '/get/:num', proyectCtrl.countProyect );

router.post(
	'/',
	[authJwt.verifyToken, authJwt.isAdmin],
	proyectCtrl.sendProyect,
);

router.put(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	proyectCtrl.editProyect,
);

router.delete(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	proyectCtrl.deleteProyect,
);

export default router;
