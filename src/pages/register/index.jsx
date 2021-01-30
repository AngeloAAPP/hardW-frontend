import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'

import FormUserData from '../../components/forms/FormUserData'
import FormUserAddress from '../../components/forms/FormUserAddress'
import FormUserImage from '../../components/forms/FormUserImage'

import FormRegisterProvider from '../../contexts/FormRegister'

import {useAuth} from '../../contexts/Auth'

const Login = () => {

    const history = useHistory()
    const {authenticated} = useAuth()

    if(authenticated)
        history.push('/')

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
