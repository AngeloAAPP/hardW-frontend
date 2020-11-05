import React, {useState} from 'react'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Button from '../../Button'
import {FaArrowLeft} from 'react-icons/fa'
import Dropzone from '../../DropzoneAvatar'

import {useFormRegister} from '../../../contexts/FormRegister'
import api from '../../../services/api'

const FormUserImage = ({changeForm}) => {

    const {name, lastName, email, whatsapp, password, zipcode, street, neighbourhood, uf, city} = useFormRegister()
    const [fileUrl, setFileUrl] = useState("")
    const [image, setImage] = useState("")

    const register = async() => {
        const data = new FormData()

        data.append("name", name)
        data.append("lastName", lastName)
        data.append("whatsapp", whatsapp)
        data.append("email", email)
        data.append("password", password)
        data.append("zipCode", zipcode)
        data.append("street", street)
        data.append("neighbourhood", neighbourhood)
        data.append("uf", uf)
        data.append("city", city)
        data.append("image", image)

        try {
            const response = await api.post('/users', data)
            console.log(response.data)
            alert("sucesso")
        } catch (err) {
            console.log(err.response.data)
        }
        
        
    }

    return (
        <Container>
            <HeaderForm 
                title = "Cadastro de usuário"
                description = "Deseja adicionar uma imagem?"
            />
            <span onClick = {() => changeForm("FormUserAddress")}>
                <FaArrowLeft/>
                Voltar
            </span>
            <Dropzone fileUrl = {fileUrl} setFileUrl = {setFileUrl} setImage = {setImage}/>
            <Button onClick = {register}>
                Cadastrar
            </Button>
        </Container>
    )
}

export default FormUserImage
