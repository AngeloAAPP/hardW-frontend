import React, {useState, useEffect} from 'react'
import {Container} from './styles'
import {FaEdit} from 'react-icons/fa'

import Input from '../../Input'
import Combobox from '../../Combobox'
import Button from '../../Button'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])
    const [uf, setUF] = useState("SP")
    const [city, setCity] = useState("Campinas")

    //states
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUfs(data))
    }, [])

    useEffect(() => {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => response.json())
            .then(data => setCities(data))
            
    }, [uf])

    return (
        <Container locked = {locked}>
            <div className = "title">
                <h1>Endereço</h1>
                <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
            </div>

            <Input placeholder = "Cep" disabled = {locked}/>
            <Input placeholder = "Rua" disabled = {locked}/>
            <Input placeholder = "Bairro" disabled = {locked}/>
            <Combobox value = {uf} id = "uf" onChange = {e =>setUF(e.target.value)} disabled = {locked}>
                <option value = "">Selecione o estado</option>
                {ufs.map(uf => <option key = {uf.id} value = {uf.sigla}>{uf.nome}</option>)}
            </Combobox>
            <Combobox value = {city} id = "city" onChange = {e => setCity(e.target.value)} disabled = {locked}>
                <option value = "">Selecione a cidade</option>
                {cities.map(city => <option key = {city.id} value = {city.nome}>{city.nome}</option>)}
            </Combobox>
            
            <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
        </Container>
    )
}

export default FormEditUser
