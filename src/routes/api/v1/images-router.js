import { Router } from "express";
const router = Router();

import * as imageCtrl from '../../../controllers/images-controller';

router.post("/", imageCtrl.sendImage);

export default router;
