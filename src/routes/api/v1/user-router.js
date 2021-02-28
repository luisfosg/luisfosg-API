import { Router } from "express";

import { authJwt } from "../../../middlewares";
import * as authCtrl from '../../../controllers/auth-controller';

const router = Router();

router.post("/signin", authCtrl.signIn);
router.post("/user", authCtrl.userRegister);

router.delete(
    "/user/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    authCtrl.userDelete
);

router.put(
    "/user/:id",
    [ authJwt.verifyToken ],
    authCtrl.userEdit
);

export default router;
