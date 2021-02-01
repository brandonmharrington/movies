import React from 'react';
import { IMG_URL, ALT_IMG } from '../config';

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
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
    </div>
  );
};

export default Movie;
