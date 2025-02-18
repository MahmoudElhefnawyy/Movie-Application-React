import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieSpinner from './MovieSpinner';
import MovieBanner from '../assets/banner2.jpg';
import Swal from 'sweetalert2'; 
import '../Styles/MovieSearch.css'

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = 'c2e0e589c39a8731d44f02e379338865';

  const fetchMovies = async () => {
    if (!searchTerm) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setMovies(data.results);
        if (data.results.length === 0) {
          Swal.fire({
            icon: 'info',
            title: 'Oops!',
            text: 'No movies found. Please try a different search term.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#6c757d',
          });
        }
      } else {
        throw new Error('Failed to fetch movies.');
      }
    } catch (error) {
      setError('Error fetching movies. Please try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <div className="bg-dark text-white">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${MovieBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="hero-content">
          <h1 className="display-4">Discover Your Next Favorite Movie</h1>
          <p className="lead">Search for movies and explore the world of cinema.</p>
          <div className="input-group w-75 mx-auto">
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '10px',
                color: '#fff',
                backgroundColor: 'rgba(52, 58, 64, 0.8)', 
                borderColor: '#6c757d',
              }}
            />
            <button className="btn btn-light" onClick={fetchMovies}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container py-5">
        {isLoading ? (
          <MovieSpinner />
        ) : error ? (
          <div className="alert alert-danger text-center">{error}</div>
        ) : movies.length > 0 ? (
          <div className="row">
            {movies.map((movie) => (
              <div className="col-md-4 mb-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;