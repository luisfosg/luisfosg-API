import { Router } from "express";
const router = Router();

import { verifyToken } from "../../../middlewares";
import * as proyectCtrl from '../../../controllers/proyects-controller';

router.get("/", proyectCtrl.obtenerProyectos);
router.get("/:id", proyectCtrl.obtenerProyecto);
router.post("/", verifyToken, proyectCtrl.agregarProyecto);
router.put("/:id", verifyToken, proyectCtrl.editarProyecto);
router.delete("/:id", verifyToken, proyectCtrl.eliminarProyecto);

router.get("/get/:num", proyectCtrl.contandoProyectos);

export default router;
