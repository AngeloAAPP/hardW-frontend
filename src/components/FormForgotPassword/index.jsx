import React from 'react'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {FaArrowLeft} from 'react-icons/fa'

const FormForgotPassword = ({changeForm}) => {
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
            <Input placeholder = "E-mail"/>
            <Button>
                Enviar
            </Button>
        </Container>
    )
}

export default FormForgotPassword
