import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import Advertisement from './pages/advertisement'

const routes = () => {
    return (
        <BrowserRouter>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/login" component = {Login} exact/>
            <Route path = "/register" component = {Register} exact/>
            <Route path = "/profile" component = {Profile} exact/>
            <Route path = "/newAdvertisement" component = {Advertisement} exact/>
        </BrowserRouter>
    )
}

export default routes
