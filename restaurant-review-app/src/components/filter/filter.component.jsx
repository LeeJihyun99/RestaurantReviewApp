import React, { useState, useEffect } from 'react';
import './filter.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faDrumstickBite, faBreadSlice, faPepperHot } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ restaurants }) => {
    const [category, setCategory] = useState('All');
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (restaurants) {
            const filteredRestaurants = restaurants.filter(restaurant => restaurant.category === category);
            setSelectedRestaurants(filteredRestaurants);
        }
    }, [restaurants, category]);

    const handleIconClick = (category) => {
        setCategory(category);
        switch (category) {
            case 'Dessert':
                setDescription('You selected Dessert. Do you have a sweet tooth?');
                break;
            case 'Main Dishes':
                setDescription('You selected Main Dishes. Ready for a hearty meal?');
                break;
            case 'Side Dishes':
                setDescription('You selected Side Dishes. Looking for something to complement your main dish?');
                break;
            case 'Toppings':
                setDescription('You selected Toppings. Add some extra flavor to your dish!');
                break;
            default:
                setDescription('');
        }
    };

    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <div className="icon-row">
                <FontAwesomeIcon icon={faIceCream} size="3x" className='filter-icon' onClick={() => handleIconClick('Dessert')} />
                <FontAwesomeIcon icon={faDrumstickBite} size="3x" className='filter-icon' onClick={() => handleIconClick('Main Dishes')} />
                <FontAwesomeIcon icon={faBreadSlice} size="3x" className='filter-icon' onClick={() => handleIconClick('Side Dishes')} />
                <FontAwesomeIcon icon={faPepperHot} size="3x" className='filter-icon' onClick={() => handleIconClick('Toppings')} />
                {/* Add more icons as needed */}
            </div>
            {description && <p>{description}</p>}
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
