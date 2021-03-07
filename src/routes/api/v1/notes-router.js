import { Router } from "express";

import * as noteCtrl from '../../../controllers/note-controller';

const router = Router();

router.post("/", noteCtrl.sendNote);

export default router;
