import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'


export default function VenuesCarousel ( ){

    const [venues, setVenues] = useState([])

    useEffect(() => {
      const fetchVenues = async () => {
        try {
          const response = await axios.get('http://localhost:3001/venues')
          console.log(response)
          setVenues(response.data)
        } catch (error) {
          console.log('Error fetching venues:', error)
        }
      }
  
      fetchVenues()
    }, [])
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000, 
      pauseOnHover: true, 
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  
    return (
      <div className="GalleryContainer">
  
  <Slider {...settings}>
  {venues.flatMap((venue, index) =>
    venue.img.map((imgUrl, imgIndex) => (
      <Link key={`${index}-${imgIndex}`} to={`/venues/${venue._id}`}>
        <img className='galleryimg' src={imgUrl} alt='img' />
      </Link>
    ))
  )}
</Slider>



      </div>
    )
  }
  