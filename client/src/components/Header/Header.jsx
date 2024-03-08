import Nav from './Nav'
import SearchBar from './Searchbar'

const Header = () => {
    return (
        <div className='FullNav'> 
            <h1> EVENTNET </h1>
            <Nav/> 
            <SearchBar />
            
            
        </div>
    )
}
export default Header