import React, { useState } from 'react';
import Properties from '../../data/Properties';
import './Listings.css'; 

const PropertiesList = ({ onSelectPlace }) => {
  const [filteredListings, setFilteredListings] = useState(Properties);

  const handleListingClick = (listing) => {
    onSelectPlace(listing);
  };

  return (
    <div className="properties-container">
      <div className="properties">
        <h2>Оголошення</h2>
        {filteredListings.map((listing, index) => (
          <div key={index} onClick={() => handleListingClick(listing)}>
            <h3>{listing.neighborhood}</h3>
            <p>{listing.price}</p>
            <p>{listing.bedrooms} {listing.bathrooms} {listing.size}</p>
            <p>{listing.address}</p>
            <img src={listing.image} alt={listing.neighborhood} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
