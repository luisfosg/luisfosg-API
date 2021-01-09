import express from "express";
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 2001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", require("./router/index-router"));

app.listen(app.get("port"), () => {
    console.log(`\n Servidor Listo en el puerto http://localhost:${app.get("port")}/  \n`);
});
