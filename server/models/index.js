const mongoose = require('mongoose')
const LocationSchema = require('./Location')
const TypeSchema = require('./Type')
const VenueSchema = require('./Venue')
const UserSchema = require('./User')

const Location = mongoose.model('Location', LocationSchema)
const Type = mongoose.model('Type', TypeSchema)
const Venue = mongoose.model('Venue', VenueSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Location,
    Type,
    Venue,
    User
}