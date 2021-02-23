import { Router } from "express";
const router = Router();

import * as contactCtrl from '../../../controllers/contact-controller';


router.post("/", contactCtrl.resEmail);
router.delete("/:id", contactCtrl.deleteEmail);
router.get("/", contactCtrl.getEmails);
router.get("/:id", contactCtrl.getEmail);

export default router;
