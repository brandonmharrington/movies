import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/Movie';
import SearchBar from './components/SearchBar';
import { API_KEY, API_URL, SEARCH_URL } from './config';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getMovies(`${API_URL}&api_key=${API_KEY}`);
  }, []);

  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMovies(`${SEARCH_URL}?api_key=${API_KEY}&query=${searchInput}`);
    setSearchInput('');
  };

  return (
    <>
      <SearchBar
        searchchange={handleChange}
        searchsubmit={handleSubmit}
        searchinput={searchInput}
      />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default App;
