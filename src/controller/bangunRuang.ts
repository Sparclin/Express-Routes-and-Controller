import { Request, Response } from "express";
import { number } from "joi";

const volumeTabung = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var r : number = Number(req.body.r)
        var t : number = Number(req.body.t)

        const volume : number = Math.floor(phi * r * r * t) ;

        res.status(200).json({
            status : true,
            data: {
                r,
                t,
                volume
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

const luasPermukaanTabung = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var r : number = Number(req.body.r)
        var t : number = Number(req.body.t)

        const luasPermukaan : number = Math.floor(2 * phi * r * (r + t));

        res.status(200).json({
            status : true,
            data: {
                r,
                t,
                luasPermukaan
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

const volumeKubus = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var s : number = Number(req.body.r)

        const volume : number = s*s*s;

        res.status(200).json({
            status : true,
            data: {
                s,
                volume
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

const luasPermukaanKubus = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var s : number = Number(req.body.r)

        const luasPermukaan : number = 6 * s * s;

        res.status(200).json({
            status : true,
            data: {
                s,
                luasPermukaan
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

const volumeBalok = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var p : number = Number(req.body.p)
        var l : number = Number(req.body.l)
        var t : number = Number(req.body.t)

        const volume : number = Math.floor(p * l * t);

        res.status(200).json({
            status : true,
            data: {
                p,
                l,
                t,
                volume
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

const luasPermukaanBalok = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var p : number = Number(req.body.p)
        var l : number = Number(req.body.l)
        var t : number = Number(req.body.t)

        const luasPermukaan : number = Math.floor(2 * (p * l) + (p * t) + (l*t));

        res.status(200).json({
            status : true,
            data: {
                p,
                l,
                t,
                luasPermukaan
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

const volumeBola = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var r : number = Number(req.body.p)

        const luasPermukaan : number = Math.floor((4/3) * (phi*phi*phi) * r * 2);

        res.status(200).json({
            status : true,
            data: {
                r,
                luasPermukaan
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

const luasPermukaanBola = (req : Request, res : Response) => {
    try {
        const phi = Math.PI;

        var r : number = Number(req.body.p)

        const luasPermukaan : number = Math.floor(4 * phi * 2);

        res.status(200).json({
            status : true,
            data: {
                r,
                luasPermukaan
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

export {
    volumeTabung,
    luasPermukaanTabung,
    volumeKubus,
    luasPermukaanKubus,
    volumeBalok,
    luasPermukaanBalok,
    volumeBola,
    luasPermukaanBola
}