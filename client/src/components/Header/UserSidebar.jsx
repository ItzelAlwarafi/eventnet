import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import userContext from '../../userContext'
import { useContext } from 'react'

export default function UserSidebar () {

    const {user} = useContext(userContext)

    return (
        <div>
            <FontAwesomeIcon icon={faUser} />
            <h1>{user.first_name} {user.last_name}</h1>
            <h4>{user.username}</h4>
            <div>
                <div>
                    <p>{RENTED}</p>
                    <p>RENTED</p>
                </div>
                <div>
                    <p>{RENTALS}</p>
                    <p>RENTALS</p>
                </div>
                <div>
                    <p>{RATING}</p>
                    <p>RATING</p>
                </div>
            </div>
            
            { user.host ? <Link to='PLACEHOLDER' >FAVOURITES</Link> : null }
            { user.owner? <Link to='OWNED' >OWNED</Link> : null }
            <Link to='ACCOUNT' >ACCOUNT</Link>
        </div>
    )
}