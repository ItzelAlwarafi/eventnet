import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SearchBar () {

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async() => {
    const response = await axios.get(`http://localhost:3001/search/${searchTerm}`)
    setResults(response.data)
    toggleSearchBar()
  }

  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
const [searchBar ,openSearchBar] = useState(false)

  const toggleSearchBar = () => openSearchBar(!searchBar)

  const removeSearch = () => {setResults([]) 
    toggleSearchBar()}

  return (
    <div className="searchbar">
      <input className="searchbar-placeholder-text"
        type="text"
        placeholder="search venue"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeydown} 
      />
     {searchBar ? 
      <div className="searchbar-result-dropdown" >
        {results.map((result, index) =>
        <div className="searchbar-result-card" key={index}>
          <img className="searchbar-result-card-image-containter">
            {/* <img className="searchbar-result-card-image" src={result.img[0]} /> */}
          </img>
          <Link to={`/venues/${result._id}`} className="text-title-24 search-link-text"  onClick={removeSearch }>{result.name}  </Link>
        </div>
        )}

      </div>
      : null }
    </div>
  
  )
}