import axios from 'axios'
import { BASE_URL } from '../globals';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([])
  
  const handleSearch = async() => {
    const response = await axios.get(`${BASE_URL}search.php?s=${encodeURIComponent(searchTerm)}`)
    setResults(response.data.venue)
  };

  
  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='dropdown'>
      <input
        type="text"
        placeholder="Search Event"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeydown} 
      />
      <div className='dropdown-content'>
        {results.map((result, index) =>
          <Link key={index} to={`/venues/${result.idVenue}`}>{result.strVenue}</Link>)}
      </div>
      
    </div>
  );
};

export default SearchBar;