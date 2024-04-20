import React, { useState } from 'react';
import './filter.styles.scss';

const Filter = () => {
    const [cuisine, setCuisine] = useState('All');

    const handleChange = (event) => {
        setCuisine(event.target.value);
    };

    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <div className="filter-content">
                <label htmlFor="cuisine">Cuisine: </label>
                <select id="cuisine" value={cuisine} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="Italian">Italian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Indian">Indian</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
    );
};

export default Filter;
