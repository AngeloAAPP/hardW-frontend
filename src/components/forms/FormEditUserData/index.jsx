import React, {useState, useEffect} from 'react'
import {Container} from './styles'

import Dropzone from '../../DropzoneAvatar'

import {ReactSVG} from 'react-svg'

import {FaEdit} from 'react-icons/fa'
import Happy from '../../../assets/icons/happy.svg'
import Input from '../../Input'
import Button from '../../Button'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {useAuth} from '../../../contexts/Auth'
import api from '../../../services/api'
import InputMask from "react-input-mask"; 

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [fileUrl, setFileUrl] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [loading, setLoading] = useState(false)

    const {data, updateUserData} = useAuth()

    function fillData(){
        setName(data.name)
        setLastName(data.lastName)
        setWhatsapp(data.whatsapp)

        
    }

    useEffect(() => {
        fillData()

        if(data.avatarUrl)
            setFileUrl(data.avatarUrl)
    }, [])

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const createdAt = new Date(data.createdAt) 

    async function update(){
        setLoading(true)

        let newData = {}

        if(name !== data.name)
            newData.name = name

        if(lastName !== data.lastName)
            newData.lastName = lastName

        if(whatsapp !== data.whatsapp)
            newData.whatsapp = whatsapp

        if(Object.keys(newData).length > 0){
            try {
                await api.put('/users', newData)
                updateUserData(newData)
            } catch (err) {
                fillData()
                toast.error(err.response.data.message)
            }
        }

        setLocked(true)
        setLoading(false)
    }
    return (
        <div>
            <Container>
                <div className = "title">
                    <h1>Avatar</h1>
                </div>
                <Dropzone fileUrl = {fileUrl} setFileUrl = {setFileUrl} setImage = {setImage} image = {image}/>
                    <span className = "about">Na HardW desde {months[createdAt.getMonth()]} de {createdAt.getFullYear()}
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
                <InputMask mask = "(99)99999-9999" placeholder = "Whatsapp" value = {whatsapp} onChange = {(e) => setWhatsapp(e.target.value)} disabled = {locked}/>
                <Input className = "notEditable" value = {data.email} disabled/>
                <span className = "note">
                    Não é possível alterar o e-mail!
                </span>
                <Button onClick = {update} disabled = {loading}>
                    {loading ? <div className="sweet-loading">
                        <LoadingAnimation
                            css={css`
                            width: 100%;
                            `}
                            color={"white"}
                            loading={loading}

                        />
                    </div> : <div>{locked ? "Salvo" : "Salvar"}</div>}</Button>
                <ToastContainer/>
            </Container>
        </div>
    )
}

export default FormEditUser
