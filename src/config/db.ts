import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false,
}) 



export default db


//Comments other way to connect with ssl option
/*const db = new Sequelize(process.env.DATABASE_URL! {
    dialectOptions: {
        ssl: {
            require: false,
        }
    }
})*/
