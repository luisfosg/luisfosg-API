import { Router } from "express";

import * as encryCtrl from '../../../controllers/encrypt-controller';

const router = Router();

router.post("/enc", encryCtrl.encrypt);
router.post("/dec", encryCtrl.decrypt);

export default router;
