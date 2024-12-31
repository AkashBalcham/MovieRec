import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/Movie/Movie';
import LandingPage from './pages/Landing/LandingPage';
import ResultPage from './pages/Results/ResultsPage';
import AllMoviesPage from './pages/AllMovies/AllMoviesPage';
import MoviesByLetter from './pages/MoviesByLetter/MoviesByLetter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <LandingPage/> } />
          <Route path='/movies/:id' element={ <MoviePage />} />
          <Route path='/query-results' element={ <ResultPage />} />
          <Route path='/all-movies' element={ <AllMoviesPage />} />
          <Route path='/all-movies/:letter' element={ <MoviesByLetter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
