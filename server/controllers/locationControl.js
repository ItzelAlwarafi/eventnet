const Location = require('../models')

const getAllLocations = async (req, res) => {
    try{
        const locations = await Location.find()
        res.json(locations)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getLocationById = async(req,res) => {
    try {
        const{id} = req.params
        const location = await Location.findById(id)
        if (location) {
            return res.json(location)
        }
        return res.status(404).send('Location not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createLocation = async(req, res) => {
    try {
        const location = await new Location (req.body)
        await location.save()
        return res.status(201).json({location})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateLocation = async(req, res) => {
    try {
        let {id} = req.params
        let location = await Location.findByIdAndUpdate(id, req.body, {new: true})
        if (location) {
            return res.status(200).json(location)
        }
        throw new Error ("Location not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteLocation = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await location.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Location deleted")
        }
        throw new Error("Location not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllLocations,
    getLocationById,
    updateLocation,
    createLocation,
    deleteLocation
}