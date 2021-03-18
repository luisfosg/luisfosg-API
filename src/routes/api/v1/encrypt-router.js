import { Router } from 'express';

import * as encryCtrl from '../../../controllers/encrypt-controller';

const router = Router();

router.get( '/enc/:psw/:txt', encryCtrl.encrypt );
router.get( '/dec/:psw/:txt', encryCtrl.decrypt );

export default router;
