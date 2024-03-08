const {Schema} =require ('mongoose')


const Type = new Schema(
    {
        environment:{type:String,require:true},
        type:{type:String,require:true}
    },
    {timestamps: true }
)
module.exports = Type