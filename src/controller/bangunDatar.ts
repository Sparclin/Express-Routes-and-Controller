import { Request,Response } from "express";
import { number } from "joi";

const luasLingkaran = (req : Request, res : Response) => {
    try {
        const phi : number = Math.PI

        var r : number = Number(req.body.r);
        var luas : number = phi * (r * r);

        res.status(200).json({
            status : true,
            data : {
                r,
                luas
            }
        })
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error
        });
    }
}

const kelilingLingkaran = (req : Request, res : Response) => {
    try {
        const phi : number = Math.PI

        var r : number = Number(req.body.r);
        const keliling : number = 2 * phi * r;

        res.status(200).json({
            status : true,
            data : {
                r,
                keliling
            }
        })
    } catch (error) {
        return res.status(500)
        .json({
            status : false,
            message : error
        })
    }
}

const luasPersegi = (req: Request,res: Response) => {
    try {
        const s:  number = Number(req.body.s)
        const luas = s * s
        return res.status(200).json({
            status: true,
            s,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

const kelilingPersegi = (req: Request,res: Response) => {
    try {
        const s:  number = Number(req.body.s)
        const keliling = s * 4
        return res.status(200).json({
            status: true,
            s,
            keliling
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

const luasPersegiPanjang = (req: Request,res: Response) => {
    try {
        const p:  number = Number(req.body.p)
        const l:  number = Number(req.body.l)
        const luas = p * l
        return res.status(200).json({
            status: true,
            p,
            l,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}


const kelilingPersegiPanjang = (req: Request,res: Response) => {
    try {
        const p:  number = Number(req.body.p)
        const l:  number = Number(req.body.l)
        const keliling = (p * l) * 2
        return res.status(200).json({
            status: true,
            p,
            l,
            keliling
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

const luasSegitiga = (req: Request,res: Response) => {
    try {
        const a:  number = Number(req.body.a)
        const t:  number = Number(req.body.t)
        const luas = (a * t) / 2
        return res.status(200).json({
            status: true,
            a,
            t,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}



export {
    luasLingkaran,
    kelilingLingkaran,
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang,
    luasSegitiga
};