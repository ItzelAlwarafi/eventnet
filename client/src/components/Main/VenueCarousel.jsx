import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function VenueCarousel() {

    const [venue, setVenue] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getVenue = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/venues/id/${id}`)
                setVenue(response.data)
                console.log(response)
            } catch (error) {
                console.error('Error fetching venue:', error)
            }
        }
        getVenue()
    }, [id])

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    if (venue) {
        return (
            <div className="VenueGalleryContainer">
                {venue.img.length > 0 ? (
                    <Slider {...settings}>
                        {venue.img.map((imgUrl, imgIndex) => (
                            <div className='img-wrapper-Venue'>  
                            <img key={`img-${imgIndex}`} className='Venuegalleryimg' src={imgUrl} alt={`img-${imgIndex}`} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="no-images">No images available</div>
                )}
            </div>
        )
    } else {
        return <div className="loading">Loading...</div>
    }
}
