/**untuk import modul dari express */
import express, {Request,Response} from 'express'
import { validateCube } from './middleware/validateCube';
import routeBangunDatar from "./routes/bangunDatar";
import routeBangunRuang from "./routes/bangunRuang";

/**untuk mendefinisikan*/
const app = express();
/**berjalannnya server */
const PORT = 3000;

/**allow to read JSON as request */
app.use(express.json());

/**proses pertama untuk handle request */
app.get("/", (request: Request, response: Response) =>{
    /**
     * proses handle request dengan
     * url : http://localhost:8000
     * method : get
     */
    
    /**
     * response
     */
    
    return response.status(200).json({
        message: "Berhasil"
    })
});

/**Membaca Query request */
app.get(`/moklet`,(request: Request, response: Response) => {
    /**
     * asumsikan data yang dikirim
     * nama dan umur
     */


    /**Kegunaan ? untuk mengetahui yang dikirimkan query */
    let nama: any = request.query.nama?.toString();
    let umur: any = request.query.umur?.toString();

    let message : string = `My name is ${nama} and my age is ${umur} years old`

    return response.status(200).json(message)
});

/**Read data request from parameter */
app.get(`/telkom/:nama/:gender`,(request : Request, response : Response) => {
    let nama : string = request.params.nama
    let gender : string = request.params.gender
    let message : string = `My names is ${nama} and my gender ${gender}`

    response.status(200).json(message);
});

/**Read data request from body */
app.post(`/moklet`, (request : Request, response : Response) => {
    /**asumsikan data yang dikirim adalah 
     * panjang dan lebar
     */
    let panjang : number = request.body.panjang
    let lebar : number = request.body.lebar
    let jumlah : number = panjang * lebar;

    let message : string = `Luas Persegi panjang adalah = ${jumlah}cm`
    response.status(200).json(message);
});

app.get(`/konversi/:suhuAwal`, (request : Request, response : Response) => {
    let suhuAwal : any = request.params.suhuAwal
    
    let fahrenhait : number = (9 / 5 * suhuAwal) + 32;
    let kelvin : number = Number(suhuAwal) + 273;
    let reamur : number = (4 / 5 * suhuAwal);


    let message : string = `Suhu celcius : ${suhuAwal} ke ==> Fahrenheit ${fahrenhait}, Celcius ==> Kelvin ${kelvin}, Celcius ==> reamur ${reamur}`;

    response.status(200).json(message);
});

/**Create request for count volume of long cube */
app.post(`/balok`, validateCube, (req : Request, res : Response) => {
    /**Read panjang,lebar,tinggi */

    let panjang : number = Number(req.body.panjang);
    let lebar : number = Number(req.body.panjang);
    let tinggi : number = Number(req.body.tinggi);

    const volume : number = panjang * lebar * tinggi;

    return res.status(200).json({
        panjang, lebar, tinggi, volume 
    }    
    );


});

app.use(routeBangunDatar);
app.use(routeBangunRuang);

/** Mulai server*/
app.listen(PORT, () => {
    console.log(`Your running on ${PORT}`);
});