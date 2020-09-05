import React, {useState} from 'react'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Button from '../../Button'
import {FaArrowLeft} from 'react-icons/fa'

const FormForgotPassword = ({changeForm}) => {

    const [email, setEmail] = useState("")

    return (
        <Container>
            <HeaderForm 
                title = "Esqueceu sua senha?"
                description = "Não se preocupe, enviaremos um link no seu email para redefinição"
            />
            <span onClick = {() => changeForm("Login")}>
                <FaArrowLeft/>
                Voltar
            </span>
            <Input placeholder = "E-mail" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <Button>
                Enviar
            </Button>
        </Container>
    )
}

export default FormForgotPassword
