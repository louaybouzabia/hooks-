import React, { useState } from 'react';
import './AddMovieForm.css';

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddMovie({
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  }

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={event => setDescription(event.target.value)} required />
        </label>
        <label>
          Poster URL:
          <input type="url" value={posterURL} onChange={event => setPosterURL(event.target.value)} required />
        </label>
        <label>
          Rating:
          <input type="number" step="0.1" min="0" max="10" value={rating} onChange={event => setRating(event.target.value)} required />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;