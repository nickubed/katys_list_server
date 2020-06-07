import express, {Request, Response} from 'express'
let expressJwt = require('express-jwt')
let cors = require('cors')
import sequelize from 'sequelize'
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
app.use(cors)
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Katys_List Server Reached')
})

app.get('*', (req: Request, res: Response) => {
    res.send('404, request not found')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`🦊You're listening to the sweet sounds of port ${process.env.PORT || 'localhost: 3000'}🦊`)
})