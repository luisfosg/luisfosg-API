"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var morgan = require("morgan");

var cors = require("cors");

var app = (0, _express["default"])();
app.set("port", process.env.PORT || 2001);
app.use(cors());
app.use(morgan("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use("/", require("./router/index-router"));
app.listen(app.get("port"), function () {
  console.log("\n Servidor Listo en el puerto http://localhost:".concat(app.get("port"), "/  \n"));
});