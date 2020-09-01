import React from 'react'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {FaArrowLeft} from 'react-icons/fa'
import {useFormRegister} from '../../contexts/FormRegister'

const FormUserAddress = ({changeForm}) => {

    const {
        zipcode,
        setZipcode,
        street,
        setStreet,
        neighbourhood,
        setNeighbourhood,
        uf,
        setUF,
        city,
        setCity
    } = useFormRegister()

    async function findAddressbyZipcode(){
        const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        if(response)
        {
            const {logradouro, bairro, localidade,uf} = await response.json()
            
            setStreet(logradouro)
            setNeighbourhood(bairro)
            setCity(localidade)
            setUF(uf)
        }
    }

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
            <Input placeholder = "Cep" value = {zipcode} onBlur = {findAddressbyZipcode} onChange = {(e) => setZipcode(e.target.value)}/>
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