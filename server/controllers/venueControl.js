const Venue = require('../models')

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
    deleteVenue
}