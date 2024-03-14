import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Location () {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const getLocations = async() => {
            const response = await axios.get('http://localhost:3001/locations')
            setLocations(response.data)
        }
        getLocations()
    }, [])

    const navigate = useNavigate()

    const showType = (location) => {
        navigate(`${location._id}`)
    }
    
    if (!locations) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='location-list-page'>
                <div className='search-list-title'>Locations</div>
                <div className="search-list-grid">
                    {locations.map((location) => (
                        <div className="search-list-card" onClick={() => showType(location)} key={location._id}>
                            <div className="list-card-image-container">
                                <img src={location.skyline} alt={location.city} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="list-card-result-info">
                                    <div className="text-title-24">{location.city}</div>
                                    <div className="text-caps-14">{location.state} • {location.country}</div>
                                </div>
                                <div className="list-card-button-container">
                                    <div className="list-card-button-explore">explore</div>
                                </div>
                            </div>
                            {/* onClick move to list of venues @ this location */}
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}