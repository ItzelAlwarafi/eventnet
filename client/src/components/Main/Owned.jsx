import { useContext } from 'react';
import userContext from '../../userContext';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Owned () {

    const { id } = useParams()
    const {user} = useContext(userContext)
    const venues = user[0].venues_owned

    const navigate = useNavigate()

    const handleClick = (venueId) => {
        navigate(`/venues/${venueId}`)
    }

    return(
        <div className="owned-venues-page">
            <div className="search-list-title">My Venues</div>
            <div className="owned-register-new-button" type='button'><Link to={`/account/${id}/register-venue`} className="owned-register-new-button-text">Register New Venue</Link></div>
            <div className="text-title-24-border">Owned Venues</div>
            <div className="search-list-grid">
                { venues.length === 0 ?
                    <div className="text-standard-16">No venues registered</div> :
                    venues.map(venue => (
                        <div className="similar-list-card" key={venue._id}>
                            <div className="similar-list-card-image-container">
                                <img className="location-list-card-image" src={venue.img[0]} onClick={() => handleClick(venue._id)} />
                            </div>
                            <div className="location-list-split">
                                <div className="location-list-info">
                                    <div className="location-list-info-primary">
                                        <Link to={`/venues/${venue._id}`} className="text-title-24 anti-link">{venue.name}</Link>
                                        <div className="text-caps-16">{venue.location.city}, {venue.location.state}, {venue.location.country}</div>
                                    </div>
                                </div>
                                <div className="owned-edit-button-container">
                                    <div className="owned-edit-button">edit</div>
                                </div>
                            </div>



                            
                        
                        </div>
                ))}
            </div>
        </div>
    )
}