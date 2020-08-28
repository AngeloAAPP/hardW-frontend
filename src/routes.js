import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'

const routes = () => {
    return (
        <BrowserRouter>
            <Route path = "/login" component = {Login} exact/>
            <Route path = "/register" component = {Register} exact/>
            <Route path = "/profile" component = {Profile} exact/>
        </BrowserRouter>
    )
}

export default routes
