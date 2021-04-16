import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { API_URL, API_KEY } from '../config';

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovieData(data.results));
  }, []);

  return (
    <>
      {movies ? (
        <div className="movie-container">
          {movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <div className="movie-container">
          {movieData.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
