import { Router } from "express";

import * as authCtrol from '../../controllers/auth-controller';

const router = Router();

router.post("/signin", authCtrol.signIn);
router.post("/signup", authCtrol.signUp);
router.delete("/user/:id", authCtrol.userDelete);
router.put("/user/:id", authCtrol.userEdit);

export default router;
