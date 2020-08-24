import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'

import FormUserData from '../../components/FormUserData'
import FormUserAddress from '../../components/FormUserAddress'
import FormUserImage from '../../components/FormUserImage'

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
                {
                    form === 'FormUserAddress' ?
                        <FormUserAddress changeForm = {setForm}/> 
                        :
                        (
                            form === 'FormUserImage' ? <FormUserImage changeForm = {setForm}/> : <FormUserData changeForm = {setForm}/>
                        )
                }
            </RightSide>
        </Container>
    )
}

export default Login
