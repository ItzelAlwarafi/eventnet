import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([])
  
  const handleSearch = async() => {
    const response = await axios.get(
  
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
          <Link key={index} to={`/locations/${result.idLocation}`}>{result.strLocation}</Link>)}
          <Link key={index} to={`/type/${result.idType}`}>{result.strSpaceType}</Link>)}
          <Link key={index} to={`//venues/:id/booking/${result.idBookingForm}`}>{result.strVenue}</Link>)}
          <Link key={index} to={`/Register/${result.idAddVenue}`}>{result.strAddVenue}</Link>)}

      </div>
      
    </div>
  );
};

export default SearchBar;