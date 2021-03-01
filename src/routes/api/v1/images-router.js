import { Router } from "express";

import { authJwt } from "../../../middlewares";
import { upload }  from '../../../services/multer';
import * as imageCtrl from '../../../controllers/images-controller';

const router = Router();

router.delete(
    "/:id",
    [ authJwt.verifyToken, authJwt.isAdmin],
    imageCtrl.deleteImage
);

router.post(
    "/",
    [ authJwt.verifyToken, authJwt.isAdmin, upload.single("image")],
    imageCtrl.sendImage
);

export default router;
