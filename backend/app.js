const express = require('express')
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors()) 
app.use(morgan('dev'))

//Routes
app.use('/api/user', userRoutes)  
app.use('/api/blog', blogRoutes)

//Middlewares

module.exports = app