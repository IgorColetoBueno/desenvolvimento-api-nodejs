//Import statements
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import server from "./server";
import routes from './routes'

//Express use
const app = express()

//Middleware definitions
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//Define server statements
server(app);
//Define routes
routes(app);


