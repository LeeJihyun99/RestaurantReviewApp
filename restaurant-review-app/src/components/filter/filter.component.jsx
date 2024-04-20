import React, { useState } from 'react';

const Filter = () => {
    const [cuisine, setCuisine] = useState('All');

    const handleChange = (event) => {
        setCuisine(event.target.value);
    };

    return (
        <div>
            <h2>Filter</h2>
            <select value={cuisine} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default Filter;
