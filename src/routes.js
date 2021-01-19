import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import CreateAdvertisement from './pages/createAdvertisement'
import Advertisement from './pages/advertisement'
import NotFound from './pages/notFound'

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Home} exact/>
                <Route path = "/login" component = {Login} exact/>
                <Route path = "/register" component = {Register} exact/>
                <Route path = "/profile" component = {Profile} exact/>
                <Route path = "/newAdvertisement" component = {CreateAdvertisement} exact/>
                <Route path = "/advertisement/:id" component = {Advertisement} exact/>
                <Route path = "*" component = {NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes
