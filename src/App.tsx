import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pokedex">
          <h1>Pokedex</h1>
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
