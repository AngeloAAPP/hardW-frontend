import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'

const routes = () => {
    return (
        <BrowserRouter>
            <Route path = "/login" component = {Login} exact/>
            <Route path = "/register" component = {Register} exact/>
        </BrowserRouter>
    )
}

export default routes
