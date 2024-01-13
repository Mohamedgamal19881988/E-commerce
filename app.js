const express = require ('express')
const bodyParser = require('body-parser')
const router = require ('./routers/routers')
const subRouter = require ('./routers/SubCategoryrouter')
const dotenv = require ('dotenv')
dotenv.config ({path:"config.env"})
const morgan = require ('morgan')
const connectDB = require ('./config/dataBase')
const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))


connectDB()




app.use ('/', router)
app.use('/' , subRouter)





const Port = process.env.Port 

const server = app.listen (Port, () =>{
    console.log(`Server is running on port ${Port}`);
})

process.on('unhandledRejection',(err) =>{
    console.error(`unhandledRejection Error:${err.name} | ${err.message}`)
    server.close(() =>{
        console.error(`Shutdown process is enabled`)

        process.exit(1)
    })
})