import { Router } from "express";
import { body } from 'express-validator';
import { createProduct } from "./handlers/product";

const router = Router()

//Routing
router.get('/', (req, res) => {
    res.json('Desde GET')
})

router.post('/', 
    //Validation
    body('name', 'El nombre es obligatorio').notEmpty(),
    body('price', 'El precio debe ser un número').isFloat(),
    createProduct
)

router.put('/', (req, res) => {
    res.json('Desde PUT')
})

router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router