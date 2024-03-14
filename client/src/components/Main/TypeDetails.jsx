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
            <div>
                <img className='typePicture' src={type.image} />
                { venues.map(venue => (
                    <div key={venue._id}>
                        <img src={venue.img[0]} alt={venue.name} onClick={()=> showVenue(venue._id)} />
                        <h3 onClick={() => showVenue(venue._id)}>{venue.name }</h3>
                        <h5>{venue.location.city}, {venue.location.state}, {venue.location.country}</h5>
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