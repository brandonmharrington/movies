import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL, ALT_IMG } from '../config.js';

const MovieCard = ({ title, vote_average, overview, poster_path, id }) => {
  const setVoteClass = vote => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className="movie">
      <Link to={`movie/${id}`} className="link">
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : `${ALT_IMG}`}
          alt={title}
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="movie-over">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
