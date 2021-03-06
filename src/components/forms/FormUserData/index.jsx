import React from 'react'
import {Link} from 'react-router-dom'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Button from '../../Button'

import {useFormRegister} from '../../../contexts/FormRegister'
import InputMask from "react-input-mask"; 

const FormLogin = ({changeForm}) => {

    const {
        name,
        setName,
        lastName,
        setLastName,
        whatsapp,
        setWhatsapp,
        email,
        setEmail,
        password,
        setPassword
    } = useFormRegister()

    return (
            <Container>
                <HeaderForm 
                    title = "Cadastro de usuário"
                    description = "Preencha os dados corretamente"
                />
                <Input placeholder = "Nome" value = {name} onChange = {(e) => setName(e.target.value)}/>
                <Input placeholder = "Ultimo nome" value = {lastName} onChange = {(e) => setLastName(e.target.value)} />
                <InputMask mask = "(99)99999-9999" placeholder = "Whatsapp" value = {whatsapp} onChange = {(e) => setWhatsapp(e.target.value)} />
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
