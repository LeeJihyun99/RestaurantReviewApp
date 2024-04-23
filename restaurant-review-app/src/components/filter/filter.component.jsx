import React, { useState, useEffect } from 'react';
import './filter.styles.scss';

const Filter = ({ restaurants }) => {
    const [cuisine, setCuisine] = useState('All');
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

    useEffect(() => {
        if (restaurants) {
            const filteredRestaurants = restaurants.filter(restaurant => restaurant.cuisine === cuisine);
            setSelectedRestaurants(filteredRestaurants);
        }
    }, [restaurants, cuisine]);

    const handleClick = (event) => {
        setCuisine(event.target.value);
    };

    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <div className="filter-content">
                <button className={`filter-button ${cuisine === 'All' ? 'selected' : ''}`} value="All" onClick={handleClick}>All</button>
                <button className={`filter-button ${cuisine === 'Italian' ? 'selected' : ''}`} value="Italian" onClick={handleClick}>Italian</button>
                <button className={`filter-button ${cuisine === 'Chinese' ? 'selected' : ''}`} value="Chinese" onClick={handleClick}>Chinese</button>
                <button className={`filter-button ${cuisine === 'Indian' ? 'selected' : ''}`} value="Indian" onClick={handleClick}>Indian</button>
                {/* Add more buttons as needed */}
            </div>
            <div className="restaurant-list">
                {selectedRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="restaurant-item">
                        <h3>{restaurant.name}</h3>
                        <p>{restaurant.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
