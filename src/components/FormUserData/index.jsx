import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'

const FormLogin = ({changeForm}) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
            <Container>
                <HeaderForm 
                    title = "Cadastro de usuário"
                    description = "Preencha os dados corretamente"
                />
                <Input placeholder = "Nome" value = {name} onChange = {(e) => setName(e.target.value)}/>
                <Input placeholder = "Ultimo nome" value = {lastName} onChange = {(e) => setLastName(e.target.value)} />
                <Input placeholder = "E-mail" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                <Input placeholder = "Senha" type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                <Button onClick = {() => changeForm("FormUserAddress")}>
                    Avançar
                </Button>
                <span>Já uma conta? 
                    <Link to = "/login">Fazer login</Link>
                </span>
            </Container>

    )
}

export default FormLogin
