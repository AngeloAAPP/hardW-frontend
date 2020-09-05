import React, {useState} from 'react'
import {Container} from './styles'
import {FaEdit} from 'react-icons/fa'

import Input from '../../Input'
import Button from '../../Button'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    return (
        <Container locked = {locked}>
            <div className = "title">
                <h1>Endereço</h1>
                <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
            </div>

            <Input placeholder = "Cep" disabled = {locked}/>
            <Input placeholder = "Rua" disabled = {locked}/>
            <Input placeholder = "Bairro" disabled = {locked}/>
            <Input placeholder = "Estado" disabled = {locked}/>
            <Input placeholder = "Cidade" disabled = {locked}/>
            
            <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
        </Container>
    )
}

export default FormEditUser
