import React from 'react';
import {  Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import FeedPage from '../screens/FeedPage';
import Signup from '../screens/Signup';


const Router = (props) => {
    return(
        <BrowserRouter>
        <Switch>
                <Route exact path={'/'}>
                    <LoginPage/>
                </Route>

                <Route exact path={'/feed'}>
                    <FeedPage/>
                </Route>

                <Route exact path={'/signup'}>
                    <Signup/>
                </Route>
       </Switch>
       </BrowserRouter>
    )
}

export default Router;