import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/00_Login/LoginPage';
import MainPage from '../components/01_Main/MainPage';
import Authentication from './Authentication';
// import Temp from '../components/temp';

const MainRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            {/* <Authentication path="/main" component={MainPage} /> */}
            <Route exact path="/main" component={MainPage} />
            {/* <Route path="/test" component={Temp} /> */}
        </Switch>
    </Fragment>
);

export default MainRouter;