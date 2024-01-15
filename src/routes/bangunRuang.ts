import express, { Request, Response } from "express";
import { isExportDeclaration } from "typescript";
import { luasPermukaanBalok, luasPermukaanBola, luasPermukaanKubus, luasPermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang";

const app = express();

app.use(express.json());

app.post(`/tabung/volume`, volumeTabung);
app.post(`/tabung/luas`, luasPermukaanTabung);
app.post(`/balok/volume`, volumeBalok);
app.post(`/balok/luas`, luasPermukaanBalok);
app.post(`/kubus/volume`, volumeKubus);
app.post(`/kubus/luas`, luasPermukaanKubus);
app.post(`/bola/volume`, volumeBola);
app.post(`/bola/luas`, luasPermukaanBola);


export default app;