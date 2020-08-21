import React, {useState} from 'react'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'
import FormLogin from '../../components/FormLogin'
import FormForgotPassword from '../../components/FormForgotPassword'

const Login = () => {

    const [form, setForm] = useState("Login")

    return (
        <Container>
            <LeftSide>
                <a href = "#">
                    <img src = {Logo}/>
                </a>
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
