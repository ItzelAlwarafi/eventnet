import { useContext } from 'react';
import userContext from '../../userContext';

export default function Owned () {
    const {user} = useContext(userContext)

    return(
        <div>
            {user[0].venues_owned.map(venue => (
                <div>
                    <h3>{venue.name}</h3>
                </div>
            ))}
        </div>
    )
}