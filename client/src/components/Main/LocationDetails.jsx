import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCaretDown, faCircleCaretUp } from '@fortawesome/pro-regular-svg-icons';

export default function LocationDetails () {

    const {id} = useParams()
    const [venues, setVenues] = useState([])
    const [location, setLocation] = useState()
    const [details, setDetails] = useState(false)

    useEffect (() => {
        const getVenues = async() => {
            const response = await axios.get(`http://localhost:3001/venues/location/${id}`)
            setVenues(response.data)
        }
        getVenues()

        const getLocation = async() => {
            const response = await axios.get(`http://localhost:3001/locations/${id}`)
            setLocation(response.data)
        }
        getLocation()
    }, [])
    console.log(venues)

    const showDetails = () => setDetails(!details)

    const navigate = useNavigate()

    const showVenue = (venueId) => {
        navigate(`/venues/${venueId}`)
    }

    if (venues && location) {
        return (
            <div>
                <img className='skyline' src={location.skyline} />
                { venues.map(venue => (
                    <div key={venue._id}>
                        <img src={venue.img[0]} alt={venue.name} onClick={()=> showVenue(venue._id)} />
                        <h3 onClick={() => showVenue(venue._id)}>{venue.name }</h3>
                        { venue.type.map(type => 
                            <h5 key={type._id}>{type.environment} {type.type}</h5>)}
                        { details ? <div>
                            <FontAwesomeIcon icon={faCircleCaretUp} onClick={showDetails} /> 
                            <dl>
                            <dt>Max Capacity</dt>
                            <dd>{venue.max_ppl} people</dd>

                            <dt>Average price</dt>
                            <dd>${new Intl.NumberFormat().format(venue.price)}/hour</dd>
                        </dl>
                        </div>
                        : <FontAwesomeIcon icon={faCircleCaretDown} onClick={showDetails} />}
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>No venues at this location.</p>
    }
}