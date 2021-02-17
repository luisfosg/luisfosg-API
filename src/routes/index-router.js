import { Router } from "express";

import homeRouter from "./page/v1-router";
import app from '../app';

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json(
        {
            name: app.get("pkg").name,
            description: app.get("pkg").description,
            author: app.get("pkg").author,
            version: app.get("pkg").version
        }
    );
});

router.use("/api", homeRouter);

export default router;
