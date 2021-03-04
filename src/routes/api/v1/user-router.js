import { Router } from "express";

import { authJwt } from "../../../middlewares";
import * as authCtrl from '../../../controllers/auth-controller';

const router = Router();

router.post("/signin", authCtrl.signIn);
router.post("/user", authCtrl.userRegister);

router.get(
    "/user",
    [ authJwt.verifyToken ],
    authCtrl.userInfo
);

router.get(
    "/users",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    authCtrl.getUsers
);

router.delete(
    "/user/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    authCtrl.userDelete
);

router.put(
    "/user/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    authCtrl.userEdit
);

export default router;
