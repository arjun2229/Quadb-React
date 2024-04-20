// src/components/BookingForm.js

import React, { useState } from 'react';
import './BookingForm.css'; // Import CSS file for additional styling

const BookingForm = ({ movieName, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(formData));
        // Close the form
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Book Movie Ticket - {movieName}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    <button type="submit" className="btn-book-ticket">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
