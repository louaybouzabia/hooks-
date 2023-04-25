import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function MovieCard({ title, description, posterURL, rating, trailerLink }) {
  return (
    <div className="movie-card">
      <Link to={{ pathname: `/movies/${title}`, state: { movie: { title, description, posterURL, rating, trailerLink } } }}>
        <img src={posterURL} alt={`${title} poster`} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </Link>
    </div>
  );
}

export default MovieCard;