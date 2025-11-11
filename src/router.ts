import { Router } from "express";
import { body, param } from 'express-validator';
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The Product ID
 *           example: 1 
 *         name:
 *           type: string
 *           description: The Product name
 *           example: "Laptop"
 *         price:
 *           type: number
 *           format: float
 *           description: The Product price
 *           example: 300
 *         availability:
 *           type: boolean
 *           description: The Product availability
 *           example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:
 *        summary: Get a list of products
 *        tags: [Products]
 *        description: Return a list of products
 *        responses:
 *          200:
 *            description: Successful response
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Product'
 */

//Routing
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *      get:
 *        summary: Get a product by ID
 *        tags: [Products]
 *        description: Return a product based on its unique ID
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The Id of the product to retrieve
 *        responses:
 *          200:
 *            description: Successful response
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Product'
 *          404:
 *            description: Product not found
 *          400:
 *            description: Bad Request - Invalid ID
 */


router.get('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products:
 *     post:
 *        summary: Creates a new product
 *        tags: [Products]
 *        description: Returns a new record in the database
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                   type: string
 *                   example: "Monitor Curvo 49 Pulgadas"
 *                  price:
 *                   type: number
 *                   format: float
 *                   example: 300
 *        responses:
 *          201:
 *            description: Product created successfully
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Product'
 *          400:
 *            description: Bad Request - Invalid input data
 */

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

/**
 * @swagger
 * /api/products/{id}:
 *     put:
 *        summary: Updates a product with user input
 *        tags: [Products]
 *        description: Update a product by its ID
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The ID of the product to retrieve
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                   type: string
 *                   example: "Monitor Curvo 49 Pulgadas"
 *                  price:
 *                   type: number
 *                   format: float
 *                   example: 300
 *                  availability:
 *                   type: boolean
 *                   example: true
 *        responses:
 *          200:
 *            description: Product updated successfully
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Product'
 *          400:
 *            description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *            description: Product not found
*/

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

/** 
* @swagger
* /api/products/{id}:
*   patch:
*       summary: Update Product availability
*       tags:
*           - Products
*       description: Returns the updated availability
*       parameters:
*          - in: path
*            name: id
*            schema:
*              type: integer
*            required: true
*            description: The ID of the product to retrieve
*       responses:
*          200:
*            description: Product updated successfully
*            content:
*              application/json:
*                schema:
*                  $ref: '#/components/schemas/Product'
*          400:
*            description: Bad Request - Invalid ID
*          404:
*            description: Product not found
*/

router.patch('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes a Product by a given ID
 *      tags: 
 *          - Products
 *      description: Delete a product by its ID
 *      parameters:
*          - in: path
*            name: id
*            schema:
*              type: integer
*            required: true
*            description: The ID of the product to delete
*      responses:
*          200:
*            description: Product updated successfully
*            content:
*              application/json:
*                schema:
*                   type: string
*                   value: 'Producto Eliminado'
*          400:
*            description: Bad Request - Invalid ID
*          404:
*            description: Product not found      
 */

router.delete('/:id', 
    param('id', 'El id debe ser un número').isNumeric(),
    handleInputErrors,
    deleteProduct
)

export default router