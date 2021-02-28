import { Router } from "express";
const router = Router();

import { authJwt } from "../../../middlewares";
import * as proyectCtrl from '../../../controllers/proyects-controller';

router.get("/", proyectCtrl.obtenerProyectos);
router.get("/:id", proyectCtrl.obtenerProyecto);
router.get("/get/:num", proyectCtrl.contandoProyectos);

router.post(
    "/",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    proyectCtrl.agregarProyecto
);

router.put(
    "/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    proyectCtrl.editarProyecto
);

router.delete(
    "/:id",
    [ authJwt.verifyToken, authJwt.isAdmin ],
    proyectCtrl.eliminarProyecto
);

export default router;
