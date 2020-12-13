import React, {useState} from 'react'

import {Container} from './styles'
import HeaderForm from '../HeaderForm'
import Button from '../../Button'
import {FaArrowLeft} from 'react-icons/fa'
import Dropzone from '../../DropzoneAvatar'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {useFormRegister} from '../../../contexts/FormRegister'
import api from '../../../services/api'

const FormUserImage = ({changeForm}) => {

    const {name, lastName, email, whatsapp, password, zipcode, street, neighbourhood, uf, city} = useFormRegister()
    const [fileUrl, setFileUrl] = useState("")
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

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

        setLoading(true)

        try {
            const response = await api.post('/users', data)
            
            const {refresh} = response.headers
            const {id} = response.data.user

            console.log(refresh)
            console.log(id)

            localStorage.setItem("refresh", refresh)
            localStorage.setItem("id", id)

            toast.success("Cadastro efetuado com sucesso. Redirecionando em instantes...")
            setDisabled(true);
            setTimeout(() => {
                window.location.pathname = '/'
            }, 4000);
        } catch (err) {
            toast.error(err.response.data.message)
        }

        setLoading(false)
        
        
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
            <Button onClick = {register} disabled = {loading || disabled}>
                {loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Cadastrar"}
            </Button>
            <ToastContainer/>
        </Container>
    )
}

export default FormUserImage
