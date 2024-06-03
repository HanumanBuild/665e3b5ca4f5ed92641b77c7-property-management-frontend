
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetailPage from './pages/PropertyDetailPage';
import { GlobalStyle } from './lib/theme';

/**
 * App.js is the entry point for the React app. It imports all the pages and components and sets up the routing.
 * This file incorporates the needs of the project by setting up routes for the Home page and the Property Detail page,
 * applying global styles, and ensuring that the application is wrapped with a Router for SPA navigation.
 */

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/property/:id" component={PropertyDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
