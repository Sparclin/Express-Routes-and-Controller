import express, { Request, Response } from "express";
import { luasLingkaran, kelilingLingkaran, luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang, luasSegitiga,  } from "../controller/bangunDatar";
import { isExportDeclaration } from "typescript";
import * as validate from "../middleware/validateDatar"

const app = express();

/**Fungsi dari use
 * untuk menerapkan sebuah fungsi  
 * pada object express.
 * fungsi tersebut akan otomatis dijalankan
 */
app.use(express.json());

app.post(`/lingkaran/luas`,validate.validateLingkaran, luasLingkaran);
app.post(`/lingkaran/keliling`,validate.validateLingkaran, kelilingLingkaran);
app.post(`/persegi/luas`,validate.validatePersegi, luasPersegi);
app.post(`/persegi/keliling`, kelilingPersegi);
app.post(`/persegipanjang/luas`,validate.validatePersegiPanjang, luasPersegiPanjang);
app.post(`/persegipanjang/keliling`,validate.validatePersegiPanjang, kelilingPersegiPanjang);
app.post(`/segitigas/luas`,validate.validateSegitiga, luasSegitiga);

export default app;