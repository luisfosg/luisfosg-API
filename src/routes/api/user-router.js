import { Router } from "express";

import * as authCtrl from '../../controllers/auth-controller';

const router = Router();

router.post("/signin", authCtrl.signIn);
router.post("/user", authCtrl.userRegister);
router.delete("/user/:id", authCtrl.userDelete);
router.put("/user/:id", authCtrl.userEdit);

export default router;
