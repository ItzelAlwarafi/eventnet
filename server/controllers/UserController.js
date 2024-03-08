const {User} = require('../models')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// const getUserById = async (req, res) => {
//     try {} catch (e)
// }

module.exports = {
    getAllUsers
}