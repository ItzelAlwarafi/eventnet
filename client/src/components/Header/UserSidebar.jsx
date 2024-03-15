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
        <div className="account-menu">
            <div className="account-menu-header">
                <a href="javascript:void(0)" class="account-menu-closebtn" onclick="closeMenu()">&times;</a>
                {/* <div className="account-menu-title">welcome</div> */}
                <a className="account-menu-header-placeholder">O</a>
            </div>
            <div className="account-menu-title">welcome</div>
            <div className="account-user-image">
                <FontAwesomeIcon className="account-user-image-icon" icon={faUser} />
            </div>
            <div className="account-info-basic">
                <div className="account-info-fullname">{user[0].first_name} {user[0].last_name}</div>
                <div className="account-info-username">{user[0].username}</div>
            </div>
            <div className="account-stats">
                <div className="account-stat-card">
                    <div className="account-stats-emphasis">{favourited}</div>
                    <div className="account-stats-subtitle">favorites</div>
                </div>
                <div className="account-stat-card">
                    <div className="account-stats-emphasis">{rentals}</div>
                    <div className="account-stats-subtitle">rentals</div>
                </div>
                <div className="account-stat-card">
                    <div className="account-stats-emphasis">4</div>
                    <div className="account-stats-subtitle">rating</div>
                </div>
            </div>
            <div className="account-links">
                <div className="account-links-divider"></div>
                { user[0].host ? <Link to={`/account/${user[0]._id}/favourites`} onClick={toggleUser} className="account-link">FAVOURITES</Link> : null }
                { user[0].owner? <Link to={`/account/${user[0]._id}/venues`} onClick={toggleUser} className="account-link">OWNED</Link> : null }
                <Link to={`/account/${user[0]._id}`} onClick={toggleUser} className="account-link">ACCOUNT</Link>
            </div>
        </div>
    )
}