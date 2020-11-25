import React, {useState, useEffect} from 'react'
import {Container} from './styles'

import Dropzone from '../../DropzoneAvatar'

import {ReactSVG} from 'react-svg'

import {FaEdit} from 'react-icons/fa'
import Happy from '../../../assets/icons/happy.svg'
import Input from '../../Input'
import Button from '../../Button'

import {useAuth} from '../../../contexts/Auth'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [fileUrl, setFileUrl] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [whatsapp, setWhatsapp] = useState("")

    const {data} = useAuth()

    useEffect(() => {
        setName(data.name)
        setLastName(data.lastName)
        setWhatsapp(data.whatsapp)

        if(data.avatarUrl)
            setFileUrl(data.avatarUrl)
    
    }, [])


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
                <Input placeholder = "Nome" value = {name} onChange = {(e) => setName(e.target.value)} disabled = {locked}/>
                <Input placeholder = "Último nome" value = {lastName} onChange = {(e) => setLastName(e.target.value)} disabled = {locked}/>
                <Input placeholder = "Whatsapp" value = {whatsapp} onChange = {(e) => setWhatsapp(e.target.value)} disabled = {locked}/>
                <Input className = "notEditable" value = {data.email} disabled/>
                <span className = "note">
                    Não é possível alterar o e-mail!
                </span>
                <Button onClick = {() => setLocked(true)}>{locked ? "Salvo" : "Salvar"}</Button>
            </Container>
        </div>
    )
}

export default FormEditUser
