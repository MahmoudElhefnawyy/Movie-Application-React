import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/MovieAllMovies.css'; 

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'c2e0e589c39a8731d44f02e379338865'; 
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; 

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1, 
          },
        });
        setMovies(response.data.results.slice(0, 21)); 
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, [API_KEY]);

  if (isLoading) {
    return <div className="loading">Loading movies...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="movie-cards-container">
      <h1 className="section-title">Explore Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div
              className="movie-poster"
              style={{
                backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})`,
              }}
            >
              <div className="movie-overlay">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}/10</p>
                <p className="movie-release-date">📅 {movie.release_date}</p>
                <button
                  className="movie-button"
                  onClick={() =>
                    window.open(
                      `https://www.themoviedb.org/movie/${movie.id}`,
                      '_blank'
                    )
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCards;