const {Schema} =require ('mongoose')

const Venue = new Schema (

{
    name:{type:String,require:true},
    street_address:{type:String,required:true},
    location:{type:Schema.Types.ObjectId, ref :'Location'},
    type:{type:Schema.Types.ObjectId, ref :'Type'},
    price:{ type: Number, required: true },
    owner:{type:String,require:true},
    owner_email:{type:String,require:true},
    owner_phoneNumber:{type:String,require:true},
    img:[{type:String,required:true}]
},
{ timestamps: true }

)
module.exports = Venue