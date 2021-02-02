import React from 'react';
import { Link } from 'react-router-dom';

function Back() {
  return (
    <div className="back">
      <Link to={'/'} className="link">
        <button>
          <i className="fas fa-arrow-circle-left"></i>
          Back
        </button>
      </Link>
    </div>
  );
}

export default Back;
