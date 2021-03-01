import { Router } from "express";
const router = Router();

import { upload }  from '../../../services/multer';
import * as imageCtrl from '../../../controllers/images-controller';

router.post("/", upload.single("image"), imageCtrl.sendImage);

export default router;
