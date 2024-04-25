import React, { useState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Listings from './components/Listings/Listings';
import Map from './components/Map/Map';
import './App.css';

const App = () => {
    const [listings, setListings] = useState([]);

    const handleAddListing = (newListing) => {
        setListings([...listings, newListing]);
    };

    const [selectedPlace, setSelectedPlace] = useState(null);

    return (
        <div className="App">
            <Header onAddListing={handleAddListing} /> 
            <Nav />
            <div className="mainsection">
                <Map selectedPlace={selectedPlace} listings={listings} /> 
                <Listings onSelectPlace={setSelectedPlace} />
            </div>
        </div>
    );
};

export default App;
