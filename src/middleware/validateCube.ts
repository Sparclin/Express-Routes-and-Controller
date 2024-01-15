import { error } from 'console';
import { NextFunction, Request, Response, response } from 'express';
import Joi = require('joi');

/**Create validate schema */
let schema = Joi.object({
    panjang : Joi.number().required().min(1),
    lebar : Joi.number().required().min(1),
    tinggi : Joi.number().required().min(1)
})

/**Create validation funtion */
let validateCube = (req : Request,
     res : Response, 
     next : NextFunction) => {

    let {error} = schema.validate(req.body)

    if(error){
        return response.status(400).json({
            message : error.details
        })
    }
    next()
}

export {validateCube}