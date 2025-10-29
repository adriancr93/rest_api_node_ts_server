import { Request, Response} from 'express'
import { validationResult } from 'express-validator'
import Product from '../models/Product.model'

export const createProduct = async (req: Request, res: Response) => {
   
    //Validation
    /*await check('name', 'El nombre es obligatorio').notEmpty().run(req)
    await check('price', 'El precio debe ser un número').isFloat().run(req)

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }*/

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    //Create product
    const product = await Product.create(req.body)
    res.json({data: product})
}