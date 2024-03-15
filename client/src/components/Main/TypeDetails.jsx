import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCaretDown, faCircleCaretUp} from '@fortawesome/pro-regular-svg-icons'

export default function TypeDetails () {
    const {id} = useParams()
    const [venues, setVenues] = useState([])
    const [type, setType] = useState()
    const [details, setDetails] = useState(false)

    useEffect (() => {
        const getVenues = async() => {
            const response = await axios.get(`http://localhost:3001/venues/types/${id}`)
            setVenues(response.data)
        }
        getVenues()

        const getType = async() => {
            const response = await axios.get(`http://localhost:3001/types/${id}`)
            setType(response.data)
        }
        getType()
    }, [])

    const showDetails = () => setDetails(!details)

    const navigate = useNavigate()

    const showVenue = (venueId) => {
        navigate(`/venues/${venueId}`)
    }

    if (venues && type) {
        return (
            <div className="location-search-results-page">
                <div className="location-search-results-header">
                    <div className="search-list-skyline-container">
                            <img className="search-list-skyline" src={type.image} />
                        </div>
                        <div className="search-list-title">{type.type} Venues</div>
                </div>
                <div className='search-list-grid'>
                    { venues.map(venue => (
                        <div className="search-list-card" key={venue._id}>
                            <div className="location-list-card-image-container">
                                <img src={venue.img[0]} alt={venue.name} onClick={()=> showVenue(venue._id)} />
                            </div>
                            <div className="location-list-split">
                                <div className="location-list-info">
                                    <div className="location-list-info-primary">
                                        <div className="text-title-28" onClick={() => showVenue(venue._id)}>{venue.name }</div>
                                        <div className="text-caps-16">{venue.location.city}, {venue.location.state}, {venue.location.country}</div>
                                    </div>                     
                                { details ? <div className="text-standard-16 location-dropdown-split">
                                    <FontAwesomeIcon className="location-list-card-dropdown-button-up" icon={faCircleCaretUp} onClick={showDetails} /> 
                                    <div className="location-list-info-secondary">
                                        <div>Max Capacity: {venue.max_ppl} people</div>
                                        <div>Average Price: ${new Intl.NumberFormat().format(venue.price)}/hour</div>
                                    </div>
                                </div>
                            : <FontAwesomeIcon className="location-list-card-dropdown-button-down" icon={faCircleCaretDown} onClick={showDetails} />}
                            </div>
                            <div className="list-card-button-container">
                                    <div className="list-card-button-explore" onClick={() => showVenue(venue._id)}>explore</div>
                                </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return <p>No venues at this location.</p>
    }
}