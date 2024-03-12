import { useContext } from 'react';
import userContext from '../../userContext';
import { useNavigate } from 'react-router-dom';

export default function Favourited () {
    const {user} = useContext(userContext)
    const venues = user[0].venues_liked

    const navigate = useNavigate()

    const handleClick = (venueId) => {
        navigate(`/venues/${venueId}`)
    }

    return(
        <div>
            { venues.length === 0 ? 
                <p>No venues favourited</p> :
                venues.map(venue => (
                    <div key={venue._id}>
                        <img src={venue.img[0]} onClick={() => handleClick(venue._id)} />
                        <Link to={`/venues/${venue._id}`} >{venue.name}</Link>
                        <h5>{venue.location.city}, {venue.location.state}, {venue.location.country}</h5>
                    </div>
                )) }
        </div>
    )
}