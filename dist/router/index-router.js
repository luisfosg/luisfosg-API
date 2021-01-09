"use strict";

var _require = require("express"),
    Router = _require.Router;

var homeRouter = require("./page/home-router");

var proyectsRouter = require("./api/proyects-router");

var router = Router();
router.use("/api", proyectsRouter);
router.use("/", homeRouter);
module.exports = router;