import React, { useState } from 'react';
import './searchbar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle the search term here, for example, send it to an API
        console.log(`Searching for: ${searchTerm}`);
    };

    const handlePressEnter = (event)=> {
        if (event.key === 'Enter'){
            console.log(`Searching for: ${searchTerm}`);
        }
    }

    return(
        <div className='search-container'>
            <form className='searchform' onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleChange}
                    className='searchInput'
                    placeholder='Press enter or click the icon to search for restaurants'
                    onKeyDown={handlePressEnter}
                />
                <button className='searchBtn' type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2xl" className='searchIcon'  />
                </button>
            </form>
        </div>
        
    
)
}

export default SearchBar;