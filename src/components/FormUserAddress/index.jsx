import React, {useState} from 'react'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {FaArrowLeft} from 'react-icons/fa'

const FormUserAddress = ({changeForm}) => {

    const [zipcode, setZipcode] = useState("")
    const [street, setStreet] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")

    return (
        <Container>
            <HeaderForm 
                title = "Cadastro de usuário"
                description = "Preencha os dados corretamente"
            />
            <span onClick = {() => changeForm("FormUserData")}>
                <FaArrowLeft/>
                Voltar
            </span>
            <Input placeholder = "Cep" value = {zipcode} onChange = {(e) => setZipcode(e.target.value)}/>
            <Input placeholder = "Rua" value = {street} onChange = {(e) => setStreet(e.target.value)}/>
            <Input placeholder = "Bairro" value = {neighbourhood} onChange = {(e) => setNeighbourhood(e.target.value)}/>
            <Input placeholder = "Estado" value = {uf} onChange = {(e) => setUF(e.target.value)}/>
            <Input placeholder = "Cidade" value = {city} onChange = {(e) => setCity(e.target.value)}/>
            <Button onClick = {() => changeForm("FormUserImage")}>
                Avançar
            </Button>
            <p>
                Não se preocupe! apenas o bairro, estado e a cidade serão exibidos nos anúncios!
            </p>
        </Container>
    )
}

export default FormUserAddress
