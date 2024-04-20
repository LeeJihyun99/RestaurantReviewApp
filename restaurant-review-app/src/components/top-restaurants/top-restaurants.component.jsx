import React, { useState, useEffect } from 'react';

const TopRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    //TODO pull api
    
  /*  useEffect(() => {
        fetch('https://api.spoonacular.com/food/menuItems/search?query=burger&number=10&apiKey=ae2a64297bb04f92bb92494f74b598ef')
        .then(response => response.json())
        .then(data => setRestaurants(data.results)) // Adjust this line
        .catch(error => console.error('Error:', error));
    
    }, []); */

    return (
        <div>
            <h2>Top Restaurants This Week</h2>
            {restaurants.map((restaurant, index) => (
                <div key={index}>
                    <h3>{restaurant.title}</h3>
                    <p>{restaurant.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TopRestaurants;
