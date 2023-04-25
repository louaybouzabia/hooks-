import React from 'react';
import { Link } from 'react-router-dom';

function MovieDescription(props) {
  const { movies } = props;
  const { id } = props.match.params;
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div className="movie-description">
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt={`${movie.title} poster`} />
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
      <div className="trailer">
        <h3>Trailer</h3>
        <iframe title={`${movie.title} trailer`} width="560" height="315" src={movie.trailerLink} frameBorder="0" allowFullScreen></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDescription;
