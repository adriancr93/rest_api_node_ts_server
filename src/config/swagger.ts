import swaggerJSDoc from "swagger-jsdoc"
import { SwaggerOptions } from "swagger-ui-express"

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operation related to products'
            }
        ],
        info: {
            title: 'Rest API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs fro Products'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerOptions = {
    customCSS : `
        .topbar-wrapper .link {
            content: url('https://www.americascardroom.eu/wp-content/uploads/2024/02/amcr-logo-white.svg');
            height: 120px;
            width: auto;
        }
    `
}

export default swaggerSpec
export {
    swaggerUiOptions
}