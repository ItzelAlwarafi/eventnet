const {Schema} =require ('mongoose')


const Type = new Schema(
    {
        environment: {type: String, required: true},
        type: {type: String, required: true},
        image: {type: String, required: true}
    },
    {timestamps: true }
)
module.exports = Type