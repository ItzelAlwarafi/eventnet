import SearchBar from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-duotone-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import UserSidebar from './UserSidebar'
import userContext from '../../userContext'
import LogIn from './LogIn'

const Header = () => {

    const { loggedIn } = useContext(userContext)
    const [navBar, openNavBar] = useState(false)
    const [userBar, openUserBar] = useState(false)

    const toggleNavBar = () => openNavBar(!navBar)
    const toggleUser = () => openUserBar(!userBar)

    return (
        <div className='header'> 
            <h1> Venyou </h1>
            <FontAwesomeIcon icon={faBars} onClick={toggleNavBar}/>
            { navBar ? <Sidebar toggleNavBar={toggleNavBar} /> : null }
            <SearchBar />
            { loggedIn ? <FontAwesomeIcon icon={faUser} onClick={toggleUser} /> : <LogIn /> }
            { userBar ? <UserSidebar toggleUser={toggleUser} /> : null }
        </div>
    )
}
export default Header