import React, {useState, useEffect} from 'react'
import {Container} from './styles'
import {FaEdit} from 'react-icons/fa'

import Input from '../../Input'
import ComboboxUF from '../../ComboboxUF'
import ComboboxCity from '../../ComboboxCity'
import Button from '../../Button'

import {useAuth} from '../../../contexts/Auth'


const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")
    const [ZipCode, setZipCode] = useState("")
    const [street, setStreet] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")

    const {data} = useAuth()

    useEffect(() => {
        setUF(data.address.uf.toUpperCase())
        setCity(data.address.city)
        setZipCode(data.address.zipCode)
        setStreet(data.address.street)
        setNeighbourhood(data.address.neighbourhood)
    }, [])


    return (
        <Container locked = {locked}>
            <div className = "title">
                <h1>Endereço</h1>
                <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
            </div>

            <Input placeholder = "Cep" value = {ZipCode} onChange = {(e) => setZipCode(e.target.value)} disabled = {locked}/>
            <Input placeholder = "Rua" value = {street}  onChange = {(e) => setStreet(e.target.value)} disabled = {locked}/>
            <Input placeholder = "Bairro" value = {neighbourhood} onChange = {(e) => setNeighbourhood(e.target.value)} disabled = {locked}/>
            <ComboboxUF uf = {uf} setUF = {setUF} disabled = {locked}/>
            <ComboboxCity uf = {uf} city = {city} setCity = {setCity} disabled = {locked}/>
            
            <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
        </Container>
    )
}

export default FormEditUser
