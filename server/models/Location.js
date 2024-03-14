const {Schema} =require ('mongoose')


const Location = new Schema (
    {
        city: {type: String, required: true},
        state: {type: String, required: false},
        country: {type: String, required: true},
        skyline: {type: String, required: true}
    },
    {timestamp:true}
)


module.exports = Location