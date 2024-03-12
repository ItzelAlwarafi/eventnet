const {Type} = require('../models')

const getAllTypes = async (req, res) => {
    try{
        const types = await Type.find({})
        res.json(types)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getTypeById = async(req,res) => {
    try {
        const{id} = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        }
        return res.status(404).send('Venue Type not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createType = async(req, res) => {
    try {
        const type = await new Type (req.body)
        await type.save()
        return res.status(201).json({type})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateType = async(req, res) => {
    try {
        let {id} = req.params
        let type = await Type.findByIdAndUpdate(id, req.body, {new: true})
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error ("Venue Type not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteType = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await type.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Venue Type deleted")
        }
        throw new Error("Venue Type not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllTypes,
    getTypeById,
    updateType,
    createType,
    deleteType
}