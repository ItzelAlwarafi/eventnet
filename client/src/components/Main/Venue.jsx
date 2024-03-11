import {useNavigate} from 'react-router-dom'

export default function Venue (props) {
    let navigate = useNavigate()

    const showVenue = (venue) => {
        navigate(`${venue.id}`)
    }
    
    return (
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
    )
}