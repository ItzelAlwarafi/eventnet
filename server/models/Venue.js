const {Schema} =require ('mongoose')

const Venue = new Schema (

{
    name:{type:String,require:true},
    location:{type:Schema.Types.ObjectId, ref :'Location'},
    type:{type:Schema.Types.ObjectId, ref :'Type'},
    price:{ type: Number, required: true },
    onwer:{type:String,require:true},
    owner_email:{type:String,require:true},
    onwer_phoneNumber:{type:String,require:true},
},
{ timestamps: true }

)
module.exports = Venue