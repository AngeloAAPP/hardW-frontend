import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'

import FormUserData from '../../components/forms/FormUserData'
import FormUserAddress from '../../components/forms/FormUserAddress'
import FormUserImage from '../../components/forms/FormUserImage'

import FormRegisterProvider from '../../contexts/FormRegister'

const Login = () => {

    const [form, setForm] = useState("FormUserData")

    return (
        <Container>
            <LeftSide>
                <Link to = "/">
                    <img src = {Logo} alt = "hardW"/>
                </Link>
            </LeftSide>
            <RightSide>
                <FormRegisterProvider>
                    {form === 'FormUserData' && <FormUserData changeForm = {setForm}/>}
                    {form === 'FormUserAddress' && <FormUserAddress changeForm = {setForm}/>}
                    {form === 'FormUserImage' && <FormUserImage changeForm = {setForm}/>}
                </FormRegisterProvider>
            </RightSide>
        </Container>
    )
}

export default Login
