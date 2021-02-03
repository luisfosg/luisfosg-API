import { Router } from "express";

import homeRouter from "./page/home-router";
import proyectsRouter from "./api/proyects-router";
import userRouter from './page/user-router';

const router = Router();

router.use("/api/proyect", proyectsRouter);
router.use("/", userRouter);
router.use("/", homeRouter);

export default router;
