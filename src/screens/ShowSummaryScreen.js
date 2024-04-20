

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import './ShowSummaryScreen.css'; 

const ShowSummaryScreen = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => {
                setShow(data);
            })
            .catch(error => {
                console.error('Error fetching show details:', error);
            });
    }, [id]);

    const handleBookTicket = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="show-summary-content">
            <h1 className="show-summary-heading">{show.name}</h1>
            <img src={show.image.original} alt={show.name} className="show-summary-image" />
            <div className="show-summary-details">
                <p><strong>Status:</strong> {show.status}</p>
                <p><strong>Language:</strong> {show.language}</p>
                <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
                <p><strong>Runtime:</strong> {show.runtime} minutes</p>
                <p><strong>Official Site:</strong> <a href={show.officialSite}>{show.officialSite}</a></p>
            </div>
            <h2 className='show-summary-summary-heading'>Summary</h2>
            <div className="show-summary-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
            
            <button className="btn btn-danger" onClick={handleBookTicket}>Book Movie Ticket</button>
        
            {isFormOpen && <BookingForm movieName={show.name} onClose={handleCloseForm} />}
        </div>
    );
};

export default ShowSummaryScreen;
