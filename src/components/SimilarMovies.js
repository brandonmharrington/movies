import React, { useEffect, useState } from 'react';
import SimilarMovieCard from './SimilarMovieCard';
import { MOVIE_URL, API_KEY } from '../config';

const SimilarMovies = ({ movieId }) => {
  const [similarMovieData, setSimilarMovieData] = useState([]);

  useEffect(() => {
    fetch(`${MOVIE_URL}${movieId}/similar?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setSimilarMovieData(data.results.slice(0, 8)));
  }, [movieId]);

  return (
    <>
      <h1 className="similar-movie-title">Similar Movies</h1>
      {
        <div className="similar-movies">
          {similarMovieData?.map(movie => (
            <SimilarMovieCard key={movie.id} {...movie} />
          ))}
        </div>
      }
    </>
  );
};

export default SimilarMovies;
