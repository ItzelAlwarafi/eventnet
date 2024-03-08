const {Schema} =require ('mongoose')


const type = new Schema(
    {
        Environment:{type:String,require:true},
        type:{type:String,require:true}
    },
    {timestamps: true }
)
module.export = type