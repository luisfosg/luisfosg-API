import { Router } from 'express';

import { authJwt } from '../../../middlewares';
import * as noteCtrl from '../../../controllers/note-controller';

const router = Router();

router.post(
	'/',
	[authJwt.verifyToken, authJwt.isAdmin],
	noteCtrl.sendNote,
);

router.get(
	'/',
	[authJwt.verifyToken, authJwt.isAdmin],
	noteCtrl.getNotes,
);

router.get(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	noteCtrl.getNote,
);

router.put(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	noteCtrl.editNote,
);

router.delete(
	'/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	noteCtrl.deleteNote,
);

export default router;
