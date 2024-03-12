import { useContext } from 'react';
import userContext from '../../userContext';
import { Link, useParams } from 'react-router-dom';

export default function Owned () {

    const { id } = useParams()
    const {user} = useContext(userContext)
    const venues = user[0].venues_owned

    return(
        <div>
            <button type='button'><Link to={`/account/${id}/register-venue`} >Register a new venue</Link></button>
            { venues.length === 0 ? 
                <p>No venues registered</p> :
                venues.map(venue => (
                    <h3>{venue.name}</h3>
                ))}
        </div>
    )
}