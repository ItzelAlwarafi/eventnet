const db = require('../db')
const { Location} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
  const locations = [

    {
        city:'New York',
        state:'NY',
        country:'USA'
    },
    {
        city:'Los Angeles',
        state:'CA',
        country:'USA'
    },
    {
      city:'Ontario',
      state:'CA',
      country:'USA'
  },
    {
        city:'Miami',
        state:'FL',
        coutry:'USA'
    }
    
    ]



  await Location.insertMany(locations)
 
  console.log('Locations Seeded! ')
}

const run = async () => {

  await main()
 
  db.close()
}

run()