import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { API_KEY, API_URL, SEARCH_URL } from '../config';

const Dashboard = () => {
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
      <MovieList movies={movies} />
    </>
  );
};

export default Dashboard;
