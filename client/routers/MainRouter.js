import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/00_Login/LoginPage';
import MainPage from '../components/01_Main/MainPage';
import Authentication from './Authentication';
import AlertDialog from '../components/01_Main/alert/AlertDialog';

const MainRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Authentication path="/main" component={MainPage} />
            <Route path="/test" component={AlertDialog} />
        </Switch>
    </Fragment>
);

export default MainRouter;