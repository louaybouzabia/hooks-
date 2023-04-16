import React from 'react';
import { useState } from 'react';
import './App.css';
function Filter({ onTitleFilterChange, onRatingFilterChange }) {
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
  
    function handleTitleFilterChange(event) {
      setTitleFilter(event.target.value);
      onTitleFilterChange(event.target.value);
    }
  
    function handleRatingFilterChange(event) {
      setRatingFilter(event.target.value);
      onRatingFilterChange(event.target.value);
    }
  
    return (
      <div className="filter">
        <label>
          Filter by Title:
          <input type="text" value={titleFilter} onChange={handleTitleFilterChange} />
        </label>
        <label>
          Filter by Rating:
          <input type="text" value={ratingFilter} onChange={handleRatingFilterChange} />
        </label>
      </div>
    );
  }

  
export default Filter;