import SearchBar from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-duotone-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from './Sidebar'
import UserSidebar from './UserSidebar'

const Header = () => {

    const [navBar, openNavBar] = useState(false)
    const [userBar, openUserBar] = useState(false)

    const toggleNavBar = () => openNavBar(!navBar)
    const toggleUser = () => openUserBar(!userBar)

    return (
        <div className='FullNav'> 
            <h1> Venyou </h1>
            <FontAwesomeIcon icon={faBars} onClick={toggleNavBar}/>
            { navBar ? <Sidebar /> : null }
            <SearchBar />
            <FontAwesomeIcon icon={faUser} onClick={toggleUser} />
            {/* { userBar ? <UserSidebar /> : null } */}
        </div>
    )
}
export default Header