import React from 'react'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'

const FormLogin = ({changeForm}) => {

    return (
            <Container>
                <HeaderForm 
                    title = "Bem-vindo novamente!"
                />
                <Input placeholder = "E-mail"/>
                <Input placeholder = "Senha" type = "password"/>
                <span onClick = {() => changeForm("ForgotPassword")}>Esqueci minha senha</span>
                <Button>
                    Entrar
                </Button>
                <span>Não possui uma conta? 
                    <a  href = "#">Cadastre-se</a>
                </span>
            </Container>

    )
}

export default FormLogin
