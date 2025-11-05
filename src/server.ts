import express from "express";
import colors from "colors";
import router from "./router";
import db from "./config/db";

//Connect to database
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue('Database connection established successfully.'))
    } catch (error) {
        // console.log(error)
        console.log(colors.red.bold('Error connecting to database'))
    }
}

connectDB()

//Instance express
const server = express()

//Read data of form JSON
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({msg: 'API working'})
})

export default server