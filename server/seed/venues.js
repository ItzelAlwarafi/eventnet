const db = require('../db')

const { Venue , Location, Type } = require('../models')

b.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ny = await Location.find({city:'New York'})
  const lax = await Location.find({city:'Los Angeles'})
  const mi =  await Location.find({city:'Miami'})
  const ontario = await Location.find({city:'Ontario'})
  const banquetHall =await Type.find({type:'Banquet'})
  const ballroom = await Type.find({type:'Ballroom'})
  const eventRoom =await Type.find({type:'Event Hall'})
  const venues =[
    {
        name:'Webster Hall',
        street_address:'125 E 11th St',
        location:ny[0]._id,
        type:[banquetHall[0]._id],
        price:35000,
        max_ppl:1600,
        owner:'Casa Galicia New York',
        owner_email:'reservations@websterhall.com',
        owner_phoneNumer:'212-388-0300',
        img:[
          'server/Images/NewYork/WebsterHall/3632987_lg.jpg',
          'server/Images/NewYork/WebsterHall/3632988_lg.jpg',
          'server/Images/NewYork/WebsterHall/3632992_lg.jpg',
          'server/Images/NewYork/WebsterHall/3633167_lg.jpg'
        ]
        
    },
    {
        name:'Sony Hall',
        street_address:'235 West 46th Street',
        location:ny[0]._id,
        type:[ballroom[0]._id],
        price: 20000,
        max_ppl:1600,
        owner:'Blue Note Entertainment Group',
        owner_email:'boxoffice@sonyhall.com. ',
        owner_phoneNumer:'212-997-5123',
        img:[
          'server/Images/NewYork/SonyHall/2355556_lg.jpg',
          'server/Images/NewYork/SonyHall/2355558_lg.jpg',
          'server/Images/NewYork/SonyHall/2355561_lg.jpg',
          'server/Images/NewYork/SonyHall/3084907_lg.jpg'
        ]
    },
    {
        name:'Dear Irving on Hudson Rooftop',
        street_address:'310 West 40th Street',
        location:ny[0]._id,
        type:[eventRoom[0]._id],
        max_ppl:300,
        price:'15000',
        owner:'Meaghan Dorman',
        owner_email:'info@dearirving.com',
        owner_phoneNumer:'917-261-6908',
        img:[
          'server/Images/NewYork/DearIrving/3299353_lg.jpg',
          'server/Images/NewYork/DearIrving/3299354_lg.jpg',
          'server/Images/NewYork/DearIrving/3299358_lg.jpg',
          'server/Images/NewYork/DearIrving/3299360_lg.jpg',
          'server/Images/NewYork/DearIrving/3299361_lg.jpg',
          'server/Images/NewYork/DearIrving/3299362_lg.jpg'
        ]
    },
    {
        name:'Hilton Los Angeles Airport',
        street_address:'5711 W Century Blvd',
        location:lax[0]._id,
        type:[banquetHall[0]._id],
        price:12000,
        max_ppl:1200,
        owner:'Fortuna Exterprises L.P.',
        owner_email:'LAXAH_Hospitable@hilton.com',
        owner_phoneNumer:'310-410-6199',
        img:[
          'server/Images/LosAngeles/HiltonLosAngelesAirpot/2889798_lg.jpg',
          'server/Images/LosAngeles/HiltonLosAngelesAirpot/3501068_lg.jpg',
          'server/Images/LosAngeles/HiltonLosAngelesAirpot/3502030_lg.jpg',
          'server/Images/LosAngeles/HiltonLosAngelesAirpot/3502031_lg.jpg',
          'server/Images/LosAngeles/HiltonLosAngelesAirpot/3502032_lg.jpg'
        ]
    },
    {
        name:'The Alexandria Ballrooms',
        street_address:'501 South Spring Street',
        location:lax[0]._id,
        type:[ballroom[0]._id],
        price:16000,
        max_ppl:960,
        owner:'John B. Parkinson',
        owner_email:'info@alexandriaballrooms.com',
        owner_phoneNumer:'213-317-3078',
        img:[
          'server/Images/LosAngeles/TheAlexandriaBallroom/1939825_lg.jpg',
          'server/Images/LosAngeles/TheAlexandriaBallroom/1939869_lg.jpg',
          'server/Images/LosAngeles/TheAlexandriaBallroom/3028244_lg.jpg',
          'server/Images/LosAngeles/TheAlexandriaBallroom/3028245_lg.jpg'
        ]
    },
    {
        name:'Beverly Banquets',
        street_address:'112 S. Euclid Ave',
        location:ontario[0]._id,
        type:[eventRoom[0]._id],
        price:9000,
        max_ppl:150,
        owner:'John B. Parkinson',
        owner_email:'thebanquets1@yahoo.com',
        owner_phoneNumer:'909-458-0062',
        img:[
          'server/Images/LosAngeles/BeverlyBanquets/3100883_lg.jpg',
          'server/Images/LosAngeles/BeverlyBanquets/3100884_lg.jpg',
          'server/Images/LosAngeles/BeverlyBanquets/3100886_lg.jpg',
          'server/Images/LosAngeles/BeverlyBanquets/3100890_lg.jpg',
          'server/Images/LosAngeles/BeverlyBanquets/3100896_lg.jpg'
        ]
    },
    {
        name:'Briza on the Bay',
        street_address:'1717 N Bayshore Drive',
        location:mi[0]._id,
        type:[banquetHall[0]._id],
        price:25000,
        max_ppl:275,
        owner:'The Chandelier of Gruene',
        owner_email:'Info@brizaonthebay.com',
        owner_phoneNumer:'786-350-2220',
        img:[
         'server/Images/Miami/BrizaontheBay/3107019_lg.jpg',
         'server/Images/Miami/BrizaontheBay/3107020_lg.jpg',
         'server/Images/Miami/BrizaontheBay/3107026_lg.jpg',
         'server/Images/Miami/BrizaontheBay/3107030_lg.jpg'
        ]
    },
    {
        name:'InterContinental Miami',
        street_address:'100 Chopin Plaza',
        location:mi[0]._id,
        type:[ballroom[0]._id],
        price:16000,
        max_ppl:3000,
        owner:'Strategic Hotels & Resorts',
        owner_email:'miaha@ihg.com',
        owner_phoneNumer:'305-577-0384',
        img:[
          'server/Images/Miami/Intercontinental/3362425_lg.jpg',
          'server/Images/Miami/Intercontinental/3362427_lg.jpg',
          'server/Images/Miami/Intercontinental/3362428_lg.jpg',
          'server/Images/Miami/Intercontinental/3362431_lg.jpg'
        ]
    },
    {
        name:'Biltmore Hotel',
        street_address:'1200 Anastasia Avenue',
        location:mi[0]._id,
        type:eventRoom[0]._id,
        price:16000,
        max_ppl:1000,
        owner:'Strategic Hotels & Resorts',
        owner_email:'first_initial last@biltmorehotel.com',
        owner_phoneNumer:'305-445-1926',
        img:[
          'server/Images/Miami/BiltmoreHotel/3520979_lg.jpg',
          'server/Images/Miami/BiltmoreHotel/3520981_lg.jpg',
          'server/Images/Miami/BiltmoreHotel/3520987_lg.jpg',
          'server/Images/Miami/BiltmoreHotel/3520988_lg.jpg',
          'server/Images/Miami/BiltmoreHotel/3520993_lg.jpg',
          'server/Images/Miami/BiltmoreHotel/3520994_lg.jpg'
        ]

    }

]

  await Venue.insertMany(venues)
 
  console.log('Venues Seeded! ')
}

const run = async () => {

  await main()
 
  db.close()
}

run()