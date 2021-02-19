import { Router } from 'express';

const router = Router();

import userRouter from "../api/v1/user-router";
import proyectRouter from "../api/v1/proyects-router";
import contactRouter from "../api/v1/contact-router";

router.use("/v1/proyect", proyectRouter);
router.use("/v1/contact", contactRouter);
router.use("/v1", userRouter);

module.exports = router;