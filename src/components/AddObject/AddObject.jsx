import React, { useState } from 'react';

const AddObject = ({ onAddListing }) => {
    const [newListing, setNewListing] = useState({
        neighborhood: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        size: '',
        address: '',
        image: '',
        lat: 0,
        lng: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewListing(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddListing(newListing); 
        setNewListing({
            neighborhood: '',
            price: '',
            bedrooms: '',
            bathrooms: '',
            size: '',
            address: '',
            image: '',
            lat: 0,
            lng: 0
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields for listing data */}
            <input type="text" name="neighborhood" placeholder="Neighborhood" value={newListing.neighborhood} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={newListing.price} onChange={handleChange} required />
            <input type="text" name="bedrooms" placeholder="Bedrooms" value={newListing.bedrooms} onChange={handleChange} required />
            <input type="text" name="bathrooms" placeholder="Bathrooms" value={newListing.bathrooms} onChange={handleChange} required />
            <input type="text" name="size" placeholder="Size" value={newListing.size} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={newListing.address} onChange={handleChange} required />
            <input type="text" name="image" placeholder="Image URL" value={newListing.image} onChange={handleChange} required />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddObject;
