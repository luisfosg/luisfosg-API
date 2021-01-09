import { Router } from "express";

import homeRouter from "./page/home-router";
import proyectsRouter from "./api/proyects-router";

const router = Router();

router.use("/api", proyectsRouter);
router.use("/", homeRouter);

export default router;
