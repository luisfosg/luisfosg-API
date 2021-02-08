import { Router } from 'express';
import app from '../../app';

const router = Router();

import userRouter from "../api/user-router";
import proyectRouter from "../api/proyects-router";
import contactRouter from "../api/contact-router";

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

router.use("/api/proyect", proyectRouter);
router.use("/api/contact", contactRouter);
router.use("/api", userRouter);

module.exports = router;
