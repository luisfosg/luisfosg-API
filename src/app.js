import express from "express";
import morgan from "morgan";
import helmet from 'helmet';
import cors from "cors";
import path from 'path';

import { createRoles, createPublic } from './libs/initialSetup';

import pkg from '../package.json';
import routes from './routes/index-router';
import './config';

const app = express();

const mode = "dev";

if(mode!=="dev"){
    createPublic();
}

createRoles();

app.set("pkg", pkg);
app.set("port", process.env.PORT || 2001);

app.use(morgan(mode));
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

export default app;
