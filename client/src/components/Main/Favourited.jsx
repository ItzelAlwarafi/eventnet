import { useContext } from 'react';
import userContext from '../../userContext';

export default function Favourited () {
    const {user} = useContext(userContext)

    return(
        <div>
            {/* {user[0].venues_liked.map(venue =>)} */}
        </div>
    )
}