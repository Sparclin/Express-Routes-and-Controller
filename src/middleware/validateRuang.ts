import { error } from 'console';
import { NextFunction, Request, Response } from 'express';
import Joi = require('joi');

/**Create validate schema */
let schemaTabung = Joi.object({
    r : Joi.number().required().min(1),
    t : Joi.number().required().min(1)
})

let schemaBola = Joi.object({
    s : Joi.number().required().min(1)
})

let schemaKubus = Joi.object({
    s : Joi.number().required().min(1)
})

let schemaBalok = Joi.object({
    p : Joi.number().required().min(1),
    l : Joi.number().required().min(1),
    t : Joi.number().required().min(1)
})

/**Create validation funtion */
export let validateBalok = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaBalok.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}

export let validateTabung = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaTabung.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}

export let validateKubus = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaKubus.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}

export let validateBola = (req : Request,
    res : Response, 
    next : NextFunction) => {

   let {error} = schemaBola.validate(req.body)

   if(error){
       return res.status(400).json({
           message : error.details
       })
   }
   next()
}