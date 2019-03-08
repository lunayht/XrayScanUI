import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../services/utils/history';
import LoginPage from '../components/00_Login/LoginPage';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LoginPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;