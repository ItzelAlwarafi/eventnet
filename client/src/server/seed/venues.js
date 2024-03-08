const db = require('../db')

const { Venue} = require('../models')

b.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    



  await Airport.insertMany(airports)
 
  console.log('Venues Seeded! ')
}

const run = async () => {

  await main()
 
  db.close()
}

run()