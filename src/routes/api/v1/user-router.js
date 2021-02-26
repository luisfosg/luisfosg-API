import { Router } from "express";

import { verifyToken } from "../../../middlewares";
import * as authCtrl from '../../../controllers/auth-controller';

const router = Router();

router.post("/signin", authCtrl.signIn);
router.post("/user", authCtrl.userRegister);
router.delete("/user/:id", verifyToken, authCtrl.userDelete);
router.put("/user/:id", verifyToken, authCtrl.userEdit);

export default router;
