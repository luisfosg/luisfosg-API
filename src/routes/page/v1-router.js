import { Router } from 'express';

const router = Router();

import userRouter from "../api/v1/user-router";
import proyectRouter from "../api/v1/proyects-router";
import contactRouter from "../api/v1/contact-router";
import imageRouter from '../api/v1/images-router';
import noteRouter from '../api/v1/notes-router';

router.use("/v1/proyect", proyectRouter);
router.use("/v1/contact", contactRouter);
router.use("/v1/image", imageRouter);
router.use("/v1/note", noteRouter);
router.use("/v1", userRouter);

module.exports = router;
