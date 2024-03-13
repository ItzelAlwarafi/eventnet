import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SearchBar () {

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async() => {
    const response = await axios.get(`http://localhost:3001/search/${searchTerm}`)
    console.log(response)
    setResults(response.data)
  }

  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='dropdown'>
      <input
        type="text"
        placeholder="Search venue"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeydown} 
      />

      <div className='dropdown-content'>
        {results.map((result, index) =>
          <Link key={index} to={`/venues/${result._id}`}>{result.name}</Link>
        )}

      </div>
      
    </div>
  )
}