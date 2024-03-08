const {Schema} = require('mongoose')

const User = new Schema (
    {
        first_name: {type: String, required: false},
        last_name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        owner: {type: Boolean, required: true},
        host: {type: Boolean, required: true},
        venues_owned: [{type: Schema.Types.ObjectId, ref: 'Venue'}],
        venues_liked: [{type: Schema.Types.ObjectId, ref: 'Venue'}]
    },
    {timestamps: true}
)

module.exports = User