import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path';

import pkg from '../package.json';
import './config';

const app = express();

app.set("pkg", pkg);
app.set("port", process.env.PORT || 2001);

app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require("./routes/index-router").default);

export default app;
