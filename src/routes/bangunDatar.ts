import express, { Request, Response } from "express";
import { luasLingkaran, kelilingLingkaran, luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang, luasSegitiga,  } from "../controller/bangunDatar";
import { isExportDeclaration } from "typescript";

const app = express();

/**Fungsi dari use
 * untuk menerapkan sebuah fungsi  
 * pada object express.
 * fungsi tersebut akan otomatis dijalankan
 */
app.use(express.json());

app.post(`/lingkaran/luas`, luasLingkaran);
app.post(`/lingkaran/keliling`, kelilingLingkaran);
app.post(`/persegi/luas`, luasPersegi);
app.post(`/persegi/keliling`, kelilingPersegi);
app.post(`/persegipanjang/luas`, luasPersegiPanjang);
app.post(`/persegipanjang/keliling`, kelilingPersegiPanjang);
app.post(`/segitigas/luas`, luasSegitiga);

export default app;