import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import userContext from '../../userContext'
import { useContext } from 'react'

export default function UserSidebar ({toggleUser}) {

    const {user} = useContext(userContext)
    const rentals = user[0].venues_owned.length
    const favourited = user[0].venues_liked.length

    return (
        <div>
            <FontAwesomeIcon icon={faUser} />
            <h1>{user[0].first_name} {user[0].last_name}</h1>
            <h4>{user[0].username}</h4>
            <div>
                <div>
                    <p>{favourited}</p>
                    <p>FAVOURITED</p>
                </div>
                <div>
                    <p>{rentals}</p>
                    <p>RENTALS</p>
                </div>
                <div>
                    <p>4</p>
                    <p>RATING</p>
                </div>
            </div>
            
            { user[0].host ? <Link to={`/account/${user[0]._id}/favourites`} onClick={toggleUser} >FAVOURITES</Link> : null }
            { user[0].owner? <Link to={`/account/${user[0]._id}/venues`} onClick={toggleUser} >OWNED</Link> : null }
            <Link to={`/account/${user[0]._id}`} onClick={toggleUser} >ACCOUNT</Link>
        </div>
    )
}