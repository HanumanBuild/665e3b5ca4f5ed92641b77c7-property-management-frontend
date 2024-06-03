
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PropertyDetailPage from '../pages/PropertyDetailPage';

/**
 * This file handles the setup of React Router for the application.
 * It defines all the routes used in the app, linking the Home page and PropertyDetailPage
 * with their respective paths. This centralizes routing logic, making it easier to manage
 * and update routes as the application grows.
 */

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/property/:id" component={PropertyDetailPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
