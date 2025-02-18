import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieHeader from './Components/MovieHeader';
import MovieSearch from './Components/MovieSearch';
import MovieFooter from './Components/MovieFooter';
import MovieSignUp from './Components/MovieSignUp';
import MovieContact from './Components/MovieContact'
import MovieAllMovies from './Components/MovieAllMovies';

const App = () => {
  return (
    <Router>
      <MovieHeader />
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/SignUp" element={<MovieSignUp />} />
        <Route path="/Contact" element={<MovieContact/>} />
        <Route path="/Movies" element={<MovieAllMovies/>} />
        <Route path="/Movies" element={<MoviePopular/>} />
      </Routes>
      <MovieFooter />
    </Router>
  );
};

export default App;