import { Router } from "express";
const router = Router();

import { verifyToken } from "../../../middlewares";
import * as contactCtrl from '../../../controllers/contact-controller';

router.post("/", contactCtrl.resEmail);
router.get("/", contactCtrl.getEmails);
router.get("/:id", contactCtrl.getEmail);
router.delete("/:id", verifyToken, contactCtrl.deleteEmail);

export default router;
