
import React from 'react';

const ListingItem = ({ listing }) => {
  return (
    <div className="listing-item">
      <img src={listing.image} alt={listing.neighborhood} />
      <div className="listing-details">
        <h2>{listing.neighborhood}</h2>
        <p>{listing.price}</p>
        <p>{listing.bedrooms}</p>
        <p>{listing.bathrooms}</p>
        <p>{listing.size}</p>
        <p>{listing.address}</p>
      </div>
    </div>
  );
};

export default ListingItem;
