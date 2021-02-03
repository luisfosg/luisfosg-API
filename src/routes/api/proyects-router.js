import { Router } from "express";
const router = Router();

import * as proyectCtrl from '../../controllers/proyects-controller';

router.get("/", proyectCtrl.obtenerProyectos);
router.post("/", proyectCtrl.agregarProyecto);
router.get("/:id", proyectCtrl.obtenerProyecto);
router.put("/:id", proyectCtrl.editarProyecto);
router.delete("/:id", proyectCtrl.eliminarProyecto);

router.get("/get/:num", proyectCtrl.contandoProyectos);

export default router;
