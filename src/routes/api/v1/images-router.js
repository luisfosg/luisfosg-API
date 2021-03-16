import { Router } from "express";

import { authJwt } from "../../../middlewares";
import { uploadImage }  from '../../../services/multer';
import * as imageCtrl from '../../../controllers/images-controller';

const router = Router();

router.get("/", imageCtrl.getImages);

router.post(
    "/",
    [ authJwt.verifyToken, authJwt.isAdmin, uploadImage.single("image") ],
    imageCtrl.sendImage
);

router.delete(
    "/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    imageCtrl.deleteImage
);

export default router;
