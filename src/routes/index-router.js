import { Router } from "express";

import homeRouter from "./page/home-router";

const router = Router();

router.use("/", homeRouter);

export default router;
