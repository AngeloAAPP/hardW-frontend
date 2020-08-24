import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'
import FormLogin from '../../components/FormLogin'
import FormForgotPassword from '../../components/FormForgotPassword'

const Login = () => {

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
                        <FormLogin changeForm = {setForm}/> 
                    : 
                        <FormForgotPassword changeForm = {setForm}/>}
                
            </RightSide>
        </Container>
    )
}

export default Login
