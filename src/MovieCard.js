import React from 'react';
import './App.css';
function MovieCard({ title, description, posterURL, rating }) {
    return (
      <div className="movie-card">
        <img src={posterURL} alt={`${title} poster`} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  }

export default MovieCard;