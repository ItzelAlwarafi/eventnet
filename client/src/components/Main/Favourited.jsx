import { useContext } from 'react';
import userContext from '../../userContext';

export default function Favourited () {
    const {user} = useContext(userContext)
    const venues = user[0].venues_liked

    return(
        <div>
            { venues.length === 0 ? 
                <p>No venues favourited</p> :
                venues.map(venue => (
                    <h3>{venue.name}</h3>
                )) }
        </div>
    )
}