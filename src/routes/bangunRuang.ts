import express, { Request, Response } from "express";
import { isExportDeclaration } from "typescript";
import { luasPermukaanBalok, luasPermukaanBola, luasPermukaanKubus, luasPermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang";
import * as validate from '../middleware/validateRuang'

const app = express();

app.use(express.json());

app.post(`/tabung/volume`,validate.validateTabung, volumeTabung);
app.post(`/tabung/luas`,validate.validateTabung, luasPermukaanTabung);
app.post(`/balok/volume`,validate.validateBalok, volumeBalok);
app.post(`/balok/luas`,validate.validateBalok, luasPermukaanBalok);
app.post(`/kubus/volume`,validate.validateKubus, volumeKubus);
app.post(`/kubus/luas`,validate.validateKubus, luasPermukaanKubus);
app.post(`/bola/volume`,validate.validateBola, volumeBola);
app.post(`/bola/luas`,validate.validateBola, luasPermukaanBola);


export default app;