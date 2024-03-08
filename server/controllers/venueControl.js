const {Venue, Location, Type} = require('../models')

const universalSearch = async(req, res) => {
    try {
        const {search} = req.params
        const regex = new RegExp(search, 'i')
        const location = await Location.find({$or: [{city: {$regex: regex}}, {state: {$regex: regex}}, {country: {$regex: regex}}]})
        const type = await Type.find({$or: [{environment: {$regex: regex}}, {type: {$regex: regex}}]})

        const venues = await Venue.find({$or: [{name: {$regex: regex}}, {owner: {$regex: regex}}, {location: location._id}, {type: type._id} ]})
        res.json(venues)
        
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getAllVenues = async (req, res) => {
    try{
        const venues = await Venue.find()
        res.json(venues)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getVenueById = async(req,res) => {
    try {
        const{id} = req.params
        const venue = await Venue.findById(id)
        if (venue) {
            return res.json(venue)
        }
        return res.status(404).send('Venue not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createVenue = async(req, res) => {
    try {
        const venue = await new Venue (req.body)
        await venue.save()
        return res.status(201).json({venue})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateVenue = async(req, res) => {
    try {
        let {id} = req.params
        let venue = await Venue.findByIdAndUpdate(id, req.body, {new: true})
        if (venue) {
            return res.status(200).json(venue)
        }
        throw new Error ("Venue not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteVenue = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await venue.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Venue deleted")
        }
        throw new Error("Venue not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllVenues,
    getVenueById,
    updateVenue,
    createVenue,
    deleteVenue,
    universalSearch
}