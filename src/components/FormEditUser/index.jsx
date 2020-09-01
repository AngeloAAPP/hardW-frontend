import React, {useState} from 'react'
import {Container} from './styles'

import Dropzone from '../DropzoneAvatar'
import Image from '../../assets/perf.jpg'

import {FaSmile, FaEdit} from 'react-icons/fa'
import Input from '../Input'
import Button from '../Button'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    return (
        <Container locked = {locked}>
            <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
            <Dropzone image = {Image}/>
            <span className = "about">Na HardW desde julho de 2020
                <FaSmile/>
            </span>
            <Input placeholder = "Nome" disabled = {locked}/>
            <Input placeholder = "Último nome" disabled = {locked}/>
            <Input placeholder = "Whatsapp" disabled = {locked}/>
            <span className = "note">
                Não é possível alterar o e-mail!
            </span>
            <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
        </Container>
    )
}

export default FormEditUser
