import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Styles/MoviePopular.css'

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY ='c2e0e589c39a8731d44f02e379338865';
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
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

   
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
          },
        });
        setGenres(response.data.genres);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    fetchPopularMovies();
    fetchGenres();
  }, [API_KEY]);

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenre(genreId);
    filterMovies(genreId, selectedRating);
  };

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    setSelectedRating(rating);
    filterMovies(selectedGenre, rating);
  };


  const filterMovies = (genreId, rating) => {
    let filtered = movies;

    if (genreId) {
      filtered = filtered.filter((movie) => movie.genre_ids.includes(Number(genreId)));
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.vote_average >= Number(rating));
    }

    setFilteredMovies(filtered);
  };

  const resetFilters = () => {
    setSelectedGenre('');
    setSelectedRating('');
    setFilteredMovies(movies);
  };

  if (isLoading) {
    return <div className="text-center mt-5 text-white">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-white">Error: {error}</div>;
  }

  return (
    <Container fluid className="bg-dark text-white py-5">
      <h1 className="text-center mb-4">Popular Movies</h1>

      <Row className="mb-4 justify-content-center">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Genre</Form.Label>
            <Form.Control
              as="select"
              value={selectedGenre}
              onChange={handleGenreChange}
              className="bg-dark text-white"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Rating</Form.Label>
            <Form.Control
              as="select"
              value={selectedRating}
              onChange={handleRatingChange}
              className="bg-dark text-white"
            >
              <option value="">All Ratings</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
              <option value="9">9+</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end">
          <Button variant="outline-light" onClick={resetFilters}>
            Reset Filters
          </Button>
        </Col>
      </Row>
      <Row className="g-4">
        {filteredMovies.map((movie) => (
          <Col key={movie.id} md={4} lg={3} className="mb-4">
            <div className="movie-card">
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviePopular;