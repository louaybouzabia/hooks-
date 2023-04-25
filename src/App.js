import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import MovieDescription from './MovieDescription';

function App() {
const [movies, setMovies] = useState([
{
title: 'The Shawshank Redemption',
description:
'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
posterURL:
'https://fr.web.img3.acsta.net/medias/nmedia/18/63/30/68/18686447.jpg',
rating: 9.3,
trailerLink: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
},
{
title: 'The Godfather',
description:
'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
posterURL: 'data:image/jpeg',
rating: 9.2,
trailerLink: 'https://www.youtube.com/watch?v=sY1S34973zA',
},
// Add more movies here
]);

const [titleFilter, setTitleFilter] = useState('');
const [ratingFilter, setRatingFilter] = useState('');

function handleAddMovie(movie) {
setMovies([...movies, movie]);
}

function handleTitleFilterChange(value) {
setTitleFilter(value);
}

function handleRatingFilterChange(value) {
setRatingFilter(value);
}

const filteredMovies = movies.filter(
(movie) =>
movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
movie.rating.toString().includes(ratingFilter)
);

return (

      <div className="app">
        <Route exact path="/">
          <Filter
            onTitleFilterChange={handleTitleFilterChange}
            onRatingFilterChange={handleRatingFilterChange}
          />
          <MovieList movies={filteredMovies} />
          <AddMovieForm onAddMovie={handleAddMovie} />
        </Route>
        <Route path="/movies/:title">
          <MovieDescription movies={movies} />
        </Route>
      </div>
    
);
}

export default App;