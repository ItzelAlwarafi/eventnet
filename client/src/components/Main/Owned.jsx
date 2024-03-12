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
        <div>
            <button type='button'><Link to={`/account/${id}/register-venue`} >Register a new venue</Link></button>
            { venues.length === 0 ? 
                <p>No venues registered</p> :
                venues.map(venue => (
                    <div key={venue._id}>
                    <img src={venue.img[0]} onClick={() => handleClick(venue._id)} />
                    <Link to={`/venues/${venue._id}`} >{venue.name}</Link>
                    <h5>{venue.location.city}, {venue.location.state}, {venue.location.country}</h5>
                    </div>
                ))}
        </div>
    )
}