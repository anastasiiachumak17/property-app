
import React, { useState } from 'react';
import AddObject from '../AddObject/AddObject'; 
import './Header.css';

const Header = ({ onAddListing }) => {
    const [showForm, setShowForm] = useState(false); 

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <header className="header">
            <h1>Найкраща нерухомість тут</h1>
            {!showForm && (
                <div className="search-panel">
                    <button className="submit-buttons" onClick={toggleForm}>Подати оголошення</button>
                </div>
            )}
        
            {showForm && <AddObject onAddListing={onAddListing} />}
        </header>
    );
};

export default Header;
