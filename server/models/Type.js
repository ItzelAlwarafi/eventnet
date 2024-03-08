const {Schema} =require ('mongoose')


const type = new Schema(
    {
        Environment:{type:Boolean,require:true},
        type:{type:String,require:true}
    },
    {timestamps: true }
)
module.export = type