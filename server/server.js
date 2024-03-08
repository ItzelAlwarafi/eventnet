const express = require('express')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

const locationController = require()
const venueController = require()
const typeController = require()

app.get('/venues', venueController)
app.post('/venues', venueController)
app.patch('/venues', venueController)
app.delete('/venues', venueController)

app.get('/locations', locationController)

app.get('/types', typeController)