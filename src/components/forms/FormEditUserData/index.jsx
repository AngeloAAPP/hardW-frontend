import React, {useState} from 'react'
import {Container} from './styles'

import Dropzone from '../../DropzoneAvatar'
import Image from '../../../assets/perf.jpg'

import {ReactSVG} from 'react-svg'

import {FaEdit} from 'react-icons/fa'
import Happy from '../../../assets/icons/happy.svg'
import Input from '../../Input'
import Button from '../../Button'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [fileUrl, setFileUrl] = useState(Image)
    const [image, setImage] = useState("")

    return (
        <div>
            <Container>
                <div className = "title">
                    <h1>Avatar</h1>
                </div>
                <Dropzone fileUrl = {fileUrl} setFileUrl = {setFileUrl} setImage = {setImage} image = {image}/>
                    <span className = "about">Na HardW desde julho de 2020
                        <ReactSVG src = {Happy}/>
                    </span>
            </Container>
            <Container locked = {locked}>
                <div className = "title">
                    <h1>Dados cadastrais</h1>
                    <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
                </div>
                <Input placeholder = "Nome" disabled = {locked}/>
                <Input placeholder = "Último nome" disabled = {locked}/>
                <Input placeholder = "Whatsapp" disabled = {locked}/>
                <span className = "note">
                    Não é possível alterar o e-mail!
                </span>
                <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
            </Container>
        </div>
    )
}

export default FormEditUser
