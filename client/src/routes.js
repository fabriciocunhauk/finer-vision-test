import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ShowResults from './pages/ShowResults';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/results" component={ShowResults} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;