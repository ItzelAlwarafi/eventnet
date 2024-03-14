import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Venue (props) {
    let navigate = useNavigate()

    const showVenue = (id) => {
        navigate(`${id}`)
    }
    
    const [venues, setVenues] = useState([])

    useEffect(() => {
        const getVenues = async() => {
            const response = await axios.get('http://localhost:3001/venues')
            setVenues(response.data)
        }
        getVenues()
    }, [])
    console.log(venues)
    
    if (!venues) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="venue-list-page">
                <div className="search-list-title">Venues</div>
                <div className="search-list-grid">
                    {venues.map((venue, id) => (
                        <div className="search-list-card">
                            <img src={venue.img} alt={venue.name} className="list-card-image"/>
                            <div className="text-title-20">{venue.city}</div>
                            <div className="text-caps-12">{venue.location}</div>
                            <button className="list-card-button-dropdown-open"/>
                            {/* figure out how to show/hide dropdown info onClick */}
                            <div className="list-card-dropdown">
                                <div className="text-standard-16">{venue.type}</div>
                                <div className="text-standard-12">{venue.owner}</div>
                                <div className="text-standard-14">{venue.price}</div>
                                <button className="list-card-button-dropdown-close"/>
                            </div>
                            <Link className="list-card-button-explore-venue" Link to={`/venues/${venue._id}`} key={id}>explore</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}