

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowListScreen.css'; 

const ShowListScreen = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
                setShows(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid show-list-container">
            <h1 className="text-center show-list-heading">TV Show List</h1>
            <h2 className="show-list-subheading">Discover the latest and greatest TV shows</h2>
            <div className="row"></div>
            <div className="row justify-content-center">
                {shows.map(({ show }) => (
                    <div key={show.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow show-card">
                            <img src={show.image?.medium || 'https://via.placeholder.com/300x400'} className="card-img-top" alt={show.name} />
                            <div className="card-body">
                                <h2 className="card-title">{show.name}</h2>
                                <p><strong>Status:</strong> {show.status}</p>
                                <p><strong>Language:</strong> {show.language}</p>
                                <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
                                <Link to={`/show/${show.id}`} className="btn btn-danger">View Summary</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowListScreen;
