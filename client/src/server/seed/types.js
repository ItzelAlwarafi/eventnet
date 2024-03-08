const db = require('../db')
const { Type } = require('../models')

b.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    



  await Airport.insertMany(airports)
 
  console.log('Types Seeded! ')
}

const run = async () => {

  await main()
 
  db.close()
}

run()