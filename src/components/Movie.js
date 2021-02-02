import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL, ALT_IMG, MOVIE_URL, API_KEY } from '../config';

const Movie = () => {
  const [movieData, setMovieData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovieData(data));
  }, [movieId]);

  return (
    <>
      <div className="movie-details">
        <img
          src={
            movieData.poster_path
              ? `${IMG_URL}${movieData.poster_path}`
              : `${ALT_IMG}`
          }
          alt={movieData.title}
        ></img>
        <div className="movie-text">
          <h1>{movieData.title}</h1>
          <p>{movieData.release_date}</p>
          <p>Runtime: {movieData.runtime} minutes</p>
          <p>Average Rating: {movieData.vote_average}/10</p>
          <p>
            <b>Description</b>
          </p>
          <p>{movieData.overview}</p>
          <a href={movieData.homepage} target="_blank" rel="noreferrer">
            More details...
          </a>
        </div>
      </div>
    </>
  );
};

export default Movie;
