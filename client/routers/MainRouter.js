import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../services/utils/history';
import LoginPage from '../components/00_Login/LoginPage';
import MainPage from '../components/01_Main/MainPage';
import TestingPage from '../components/testing';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/testing" component={TestingPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;