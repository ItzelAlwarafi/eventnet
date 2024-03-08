import {useNavigate} from 'react-router-dom'

export default function Location (props) {
    let navigate = useNavigate()

    const showLocation = (location) => {
        navigate(`${location.id}`)
    }
    
    return (
        <div className='location-list-page'>
            <div className='search-list-title'>Locations</div>
            <div className="search-list-grid">
                {props.locations.map((location) => (
                    <div className="search-list-card" onClick={() => showLocation(location)} key={location.id}>
                        {/* <img src={location.img} alt={location.name} className="list-card-image"/> */}
                        <div className="list-card-title">{location.city}</div>
                        <div className="list-card-subtitle">{location.state} • {location.country}</div>
                        <button className="list-card-button-location">explore</button>
                    </div>
                ))}
            </div>
        </div>
    )
}