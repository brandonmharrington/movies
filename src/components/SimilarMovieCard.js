import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL, ALT_IMG } from '../config.js';

const SimilarMovieCard = ({ title, release_date, poster_path, id }) => {
  return (
    <div className="similar-movie">
      <Link to={`${id}`} className="link">
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : `${ALT_IMG}`}
          alt={title}
        />
        <div className="similar-movie-info">
          <h3>{title}</h3>
          <h6>{release_date?.slice(0, 4)}</h6>
        </div>
      </Link>
    </div>
  );
};

export default SimilarMovieCard;
