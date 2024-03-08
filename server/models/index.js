const mongoose = require('mongoose')
const LocationSchema = require('./Location')
const TypeSchema = require('./Type')
const VenueSchema = require('./Venue')

const Location = mongoose.model('Location', LocationSchema)
const Type = mongoose.model('Type', TypeSchema)
const Venue = mongoose.model('Venue', VenueSchema)

module.exports = {
    Location,
    Type,
    Venue
}