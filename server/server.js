const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const locationControl = require('./controllers/locationControl')
const typeControl = require('./controllers/typeControl')
const venueControl = require('./controllers/venueControl')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// Sytem Check
app.get('/', (req, res) => {
    res.send("Welcome to the party")
})

// Find All Routes - All
app.get('/locations', locationControl.getAllLocations)
app.get('/types', typeControl.getAllTypes)
app.get('/venues', venueControl.getAllVenues)
// Find by ID Routes - All
app.get('/locations/:id', locationControl.getLocationById)
app.get('/types/:id', typeControl.getTypeById)
app.get('/venues/:id', venueControl.getVenueById)

// CRUD Routes - Locations
app.post('/locations/', locationControl.createLocation)
app.put('/locations/:id', locationControl.updateLocation)
app.delete('/locations/:id', locationControl.deleteLocation)
// CRUD Routes - Types
app.post('/types/', typeControl.createType)
app.put('/types/:id', typeControl.updateType)
app.delete('/types/:id', typeControl.deleteType)
// CRUD Routes - Venues
app.post('/venues/', venueControl.createVenue)
app.put('/venues/:id', venueControl.updateVenue)
app.delete('/venues/:id', venueControl.deleteVenue)