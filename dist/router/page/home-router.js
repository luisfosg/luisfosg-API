"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();
router.get("/", function (req, res) {
  res.status(200).json({
    "status": "Welcome"
  });
});
module.exports = router;