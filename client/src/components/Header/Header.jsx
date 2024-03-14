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
        <div className="header"> 
            <div className="header-primary">
                <FontAwesomeIcon icon={faBars} inverse className="side-menu-button" onClick={toggleNavBar}/>
                { navBar ? <Sidebar toggleNavBar={toggleNavBar} /> : null  }
               
                <div className="app-title"> Venyou </div>
            </div>
            <div className="header-search">
                <SearchBar />
            </div>
            <FontAwesomeIcon icon={faUser} onClick={toggleUser} />
                { loggedIn && userBar ? <UserSidebar toggleUser={toggleUser} />  : null}
                { !loggedIn && userBar ? <LogIn /> : null }
        </div>
    )
}
export default Header