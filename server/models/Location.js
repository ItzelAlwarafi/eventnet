const {Schema} =require ('mongoose')


const Location = new Schema (
    {
        city:{type:String,require:true},
        state:{type:String,require:true},
        country:{type:String,require:true},
    },
    {timestamp:true}
)


module.exports = Location