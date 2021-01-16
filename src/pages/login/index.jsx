import React, {useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'
import FormLogin from '../../components/forms/FormLogin'
import FormForgotPassword from '../../components/forms/FormForgotPassword'
import {useAuth} from '../../contexts/Auth'

const Login = () => {

    const history = useHistory()
    const {authenticated} = useAuth()

    if(authenticated)
        history.push('/')

    let queryParam = new URLSearchParams(useLocation().search).get("redirect");

    const [form, setForm] = useState("Login")

    return (
        <Container>
            <LeftSide>
                <Link to = "/">
                    <img src = {Logo} alt = "hardW"/>
                </Link>
            </LeftSide>
            <RightSide>
                {form === 'Login' ?  
                        <FormLogin changeForm = {setForm} redirect = {queryParam}/> 
                    : 
                        <FormForgotPassword changeForm = {setForm}/>}
                
            </RightSide>
        </Container>
    )
}

export default Login
