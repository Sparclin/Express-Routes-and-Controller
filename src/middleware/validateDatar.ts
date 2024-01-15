import { error } from 'console';
import { NextFunction, Request, Response } from 'express';
import Joi = require('joi');

/**Create validate schema */
let schemaLingkaran = Joi.object({
    r : Joi.number().required().min(1)
})

let schemaPersegi = Joi.object({
    s : Joi.number().required().min(1)
})

let schemaPersegiPanjang = Joi.object({
    l : Joi.number().required().min(1),
    p : Joi.number().required().min(1)
})

let schemaSegitiga = Joi.object({
    a : Joi.number().required().min(1),
    t : Joi.number().required().min(1)
})

/**Create validation funtion */
export let validateLingkaran = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaLingkaran.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}

export let validatePersegi = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaPersegi.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}

export let validatePersegiPanjang = (req : Request,
     res : Response, 
     next : NextFunction) => {

    let {error} = schemaPersegiPanjang.validate(req.body)

    if(error){
        return res.status(400).json({
            message : error.details
        })
    }
    next()
}

export let validateSegitiga = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaSegitiga.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}