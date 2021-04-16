import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Back from './Back';
import SimilarMovies from './SimilarMovies';
import { IMG_URL, ALT_IMG, MOVIE_URL, API_KEY } from '../config';

const Movie = () => {
  const [movieData, setMovieData] = useState([]);

  const { movieId } = useParams();

  const imdbUrl = `https://imdb.com/title/${movieData.imdb_id}`;

  useEffect(() => {
    fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovieData(data));
  }, [movieId]);

  return (
    <>
      <Back />
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
          <h1 className="movie-text-title">{movieData.title}</h1>
          <p className="movie-text-release">
            {movieData.release_date?.slice(0, 4)}
          </p>
          <p className="movie-text-runtime">
            Runtime: {movieData.runtime} minutes
          </p>
          <p className="movie-text-rating">
            Average Rating: {movieData.vote_average}/10
          </p>
          <a
            className="movie-text-imdb"
            href={imdbUrl}
            target="_blank"
            rel="noreferrer"
          >
            IMDb
          </a>
          <div className="movie-text-description">
            <p>
              <b>Description</b>
            </p>
            <p>{movieData.overview}</p>
          </div>
          <a href={movieData.homepage} target="_blank" rel="noreferrer">
            More details...
          </a>
        </div>
      </div>
      <div className="similar-movies">
        <SimilarMovies movieId={movieId} />
      </div>
    </>
  );
};

export default Movie;
