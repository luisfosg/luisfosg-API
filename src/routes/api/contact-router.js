import { Router } from "express";
const router = Router();

import * as contactCtrl from '../../controllers/contact-controller';


router.post("/", contactCtrl.resEmail);

export default router;
