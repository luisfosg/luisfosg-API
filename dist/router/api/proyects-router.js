"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();
router.get("/proyects", function (req, res) {
  res.status(200).json({
    "status": "OK"
  });
});
module.exports = router;