import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Venue (props) {
    let navigate = useNavigate()

    const [venue, setVenue] = useState('')
    let {id} = useParams()

    useEffect(() => {
        const getLocations = async() => {
            const response = await axios.get('http://localhost:3001/locations')
            setLocations(response.data)
        }
        const getTypes = async() => {
            const response = await axios.get('http://localhost:3001/types')
            setTypes(response.data)
        }
        const getVenues = async() => {
            const response = await axios.get('http://localhost:3001/venues')
            setVenues(response.data)
        }

        getLocations()
        getTypes()
        getVenues()
    }, [])
    
    return venue ? (
        <div className="venue-list-page">
            <div className="search-list-title">Venues</div>
            <div className="search-list-grid">
                {props.venues.map((venue) => (
                    <div className="search-list-card">
                        {/* <img src={venue.img} alt={venue.name} className="list-card-image"/> */}
                        <div className="list-card-title">{venue.city}</div>
                        <div className="list-card-subtitle">{venue.location}</div>
                        <button className="list-card-button-dropdown-open"/>
                        {/* figure out how to show/hide dropdown info onClick */}
                        <div className="list-card-dropdown">
                            <div className="list-card-dropdown-primary">{venue.type}</div>
                            <div className="list-card-dropdown-secondary">{venue.owner}</div>
                            <div className="list-card-dropdown-primary">{venue.price}</div>
                            <button className="list-card-button-dropdown-close"/>
                        </div>
                        <button className="list-card-button-venue" onClick={() => showVenue(venue)} key={venue.id}>explore</button>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="loading">Loading...</div>
    )
}