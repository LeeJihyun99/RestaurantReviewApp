import React, { useState } from 'react';
const SearchBar = ()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle the search term here, for example, send it to an API
        console.log(`Searching for: ${searchTerm}`);
    };
    //TODO replace seperate CSS data later :_
    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
        },
        input: {
            width: '80%',
            padding: '0.5rem',
            fontSize: '1rem'
        },
        button: {
            width: '30%',
            padding: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }
    };
    return(
        <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="search">
            Search:
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleChange}
                style={styles.input}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    
)
}

export default SearchBar;