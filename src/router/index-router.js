const { Router } = require("express");

const homeRouter = require("./page/home-router");
const proyectsRouter = require("./api/proyects-router");

const router = Router();

router.use("/api", proyectsRouter);
router.use("/", homeRouter);

module.exports = router;
