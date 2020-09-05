import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Button from '../../Button'

const FormLogin = ({changeForm}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <Container>
                <HeaderForm 
                    title = "Bem-vindo novamente!"
                />
                <Input placeholder = "E-mail" value = {email} onChange = {(e => setEmail(e.target.value))}/>
                <Input placeholder = "Senha" type = "password" value = {password} onChange = {(e => setPassword(e.target.value))}/>
                <span onClick = {() => changeForm("ForgotPassword")}>Esqueci minha senha</span>
                <Button>
                    Entrar
                </Button>
                <span>Não possui uma conta? 
                    <Link to = "/register">Cadastre-se</Link>
                </span>
            </Container>

    )
}

export default FormLogin
