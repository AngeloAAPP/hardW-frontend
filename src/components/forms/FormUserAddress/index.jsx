import React, {useState, useEffect} from 'react'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Combobox from '../../Combobox'
import Button from '../../Button'
import {FaArrowLeft} from 'react-icons/fa'
import {useFormRegister} from '../../../contexts/FormRegister'

const FormUserAddress = ({changeForm}) => {

    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])

    //states
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUfs(data))
    }, [])

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

    //cities
    useEffect(() => {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => response.json())
            .then(data => setCities(data))
            
    }, [uf])

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
            <Combobox value = {uf} id = "uf" onChange = {e =>setUF(e.target.value)}>
                <option value = "">Selecione o estado</option>
                {ufs.map(uf => <option key = {uf.id} value = {uf.sigla}>{uf.nome}</option>)}
            </Combobox>
            <Combobox value = {city} id = "city" onChange = {e => setCity(e.target.value)}>
                <option value = "">Selecione a cidade</option>
                {cities.map(city => <option key = {city.id} value = {city.nome}>{city.nome}</option>)}
            </Combobox>
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
