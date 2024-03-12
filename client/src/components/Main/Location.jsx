import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Location (props) {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const getLocations = async() => {
            const response = await axios.get('http://localhost:3001/locations')
            setLocations(response.data)
        }
        getLocations()
    }, [])
    console.log(locations)

    const showType = (location) => {
        navigate(`${location.id}`)
    }
    
    if (!locations) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='location-list-page'>
                <div className='search-list-title'>Locations</div>
                <div className="search-list-grid">
                    {locations.map((location) => (
                        <div className="search-list-card" onClick={() => showType(location)} key={location.id}>
                            {/* <img src={location.img} alt={location.city} className="list-card-image"/> */}
                            <div className="text-title-20">{location.city}</div>
                            <div className="text-caps-12">{location.state} • {location.country}</div>
                            <button className="list-card-button-explore">explore</button>
                            {/* onClick move to list of venues @ this location */}
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}