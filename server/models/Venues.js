const {Schema} =require ('mongoose')

const venue = new Schema (

{
    name:{type:String,require:true},
    location:{type:Schema.Types.ObjectId, ref :'location_id'},
    type:{type:Schema.Types.ObjectId, ref :'type_id'},
    price:{ type: Number, required: true },
    onwer:{type:String,require:true},
    owner_email:{type:String,require:true},
    onwer_phoneNumber:{type:String,require:true},
},
{ timestamps: true }

)
module.export = venue