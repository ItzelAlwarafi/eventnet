const db = require('../db')
const { Type } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
const types = [
{
  type: 'Event Hall',
  environment: true
  

},
{
  type:'Banquet',
  environment: true
  
},
{
  type:'Ballroom',
  environment: true
  
}

]


  await Type.insertMany(types)
 
  console.log('Types Seeded! ')
}

const run = async () => {

  await main()
 
  db.close()
}

run()