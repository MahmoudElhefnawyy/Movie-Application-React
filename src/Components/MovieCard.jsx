import React from 'react';

const MovieCard = ({ movie }) => {
  const defaultImage = 'https://via.placeholder.com/500x750'; 
  const defaultTitle = 'Movie Title Not Available';
  const defaultDescription = 'No description available for this movie.';

  return (
    <div className="card bg-dark text-white shadow-sm h-100">
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImage}
        alt={movie.title || defaultTitle}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title || defaultTitle}</h5>
        <p className="card-text text-muted">
          {movie.overview ? movie.overview.substring(0, 100) + '...' : defaultDescription}
        </p>
        <p className="card-text">
          <small className="text-warning">
            Rating: {movie.vote_average ? `${movie.vote_average} ⭐` : 'N/A'}
          </small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;