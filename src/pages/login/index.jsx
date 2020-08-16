import React from 'react'

import {Container, LeftSide, RightSide, ContainerForm} from './styles'
import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'

const Login = () => {
    return (
        <Container>
            <LeftSide>
                <a href = "#">
                    <img src = {Logo}/>
                </a>
            </LeftSide>
            <RightSide>
                <ContainerForm>
                    <HeaderForm 
                        title = "Bem-vindo novamente!"
                    />
                    <Input placeholder = "E-mail"/>
                    <Input placeholder = "Senha" type = "password"/>
                    <a className = "legend" href = "#">Esqueci minha senha</a>
                    <Button>
                        Entrar
                    </Button>
                    <span className = "legend">Não possui uma conta? 
                        <a  href = "#">Cadastre-se</a>
                    </span>
                </ContainerForm>
            </RightSide>
        </Container>
    )
}

export default Login
