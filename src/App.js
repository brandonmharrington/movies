import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Movie from './components/Movie';

const App = () => {
  return (
    <Router>
      <div className="movie-container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/movie/:movieId" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
