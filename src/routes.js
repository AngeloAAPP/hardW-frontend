import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/login'

const routes = () => {
    return (
        <BrowserRouter>
            <Route path = "/login" component = {Login} exact/>
        </BrowserRouter>
    )
}

export default routes
