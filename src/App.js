import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Movie from './components/Movie';
import tmdb_logo from './tmdb_logo.svg';

const App = () => {
  return (
    <Router>
      <div className="movie-container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/movie/:movieId" component={Movie} />
        </Switch>
      </div>
      <footer>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
        <img src={tmdb_logo} className="logo" alt="tmdb logo"></img>
      </footer>
    </Router>
  );
};

export default App;
