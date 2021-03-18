import { Router } from 'express';

import { authJwt } from '../../../middlewares';
import * as contactCtrl from '../../../controllers/contact-controller';

const router = Router();

router.post( '/', contactCtrl.resEmail );

router.get(
	'/',
	[authJwt.verifyToken],
	contactCtrl.getEmails,
);

router.get(
	'/:id',
	[authJwt.verifyToken],
	contactCtrl.getEmail,
);

router.delete(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	contactCtrl.deleteEmail,
);

export default router;
