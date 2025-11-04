import { Router } from "express";
import { body, param } from 'express-validator';
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router()

//Routing
router.get('/', getProducts)

router.get('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    getProductById
)

router.post('/', 
    //Validation
    body('name', 'El nombre es obligatorio').notEmpty(),
    body('price')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es obligatorio')
        .custom((value) => value > 0).withMessage('El precio debe ser mayor que 0'),
    handleInputErrors,
    createProduct
)

//Always PUT should be have the id param
router.put('/:id',
    body('name', 'El nombre es obligatorio').notEmpty(),
    body('price')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es obligatorio')
        .custom((value) => value > 0).withMessage('El precio debe ser mayor que 0'),
    body('availability', 'La disponibilidad debe ser un valor booleano').isBoolean(),
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    deleteProduct
)

export default router