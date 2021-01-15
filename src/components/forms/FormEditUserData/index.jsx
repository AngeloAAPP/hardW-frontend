import React, {useState, useEffect} from 'react'
import {Container} from './styles'

import {ReactSVG} from 'react-svg'

import {FaEdit} from 'react-icons/fa'
import Happy from '../../../assets/icons/happy.svg'
import Input from '../../Input'
import Button from '../../Button'
import Dropzone from '../../DropzoneAvatar'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {useAuth} from '../../../contexts/Auth'
import api from '../../../services/api'
import InputMask from "react-input-mask"; 
import {Confirm} from 'react-st-modal'

const FormEditUser = () => {

    const [locked, setLocked] = useState(true)
    const [fileUrl, setFileUrl] = useState("")
    const [image, setImage] = useState("")
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadingDropAvatar, setLoadingDropAvatar] = useState(false)
    const [loadingAddAvatar, setLoadingAddAvatar] = useState(false)

    const {data, updateUserData} = useAuth()

    function fillData(){
        setName(data.name)
        setLastName(data.lastName)
        setWhatsapp(data.whatsapp)
    }

    useEffect(() => {
        fillData()

        if(data.avatarUrl)
            setAvatarUrl(data.avatarUrl)
    }, [])

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const createdAt = new Date(data.createdAt) 

    //Atualiza os dados armazenados no contexto do client ao clicar no botão salvar
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

    //Função que exclui a foto de perfil do usuário
    async function dropAvatar(){

        const confirm = await Confirm("Você poderá adicionar uma nova imagem de perfil posteriormente",
        "Tem certeza que deseja excluir sua imagem?", "Excluir", "Cancelar")

        if(confirm){
            setLoadingDropAvatar(true)
            try {
                await api.patch('/users/avatarUrl')
                updateUserData({
                    ...data,
                    avatarUrl: null
                })
                setAvatarUrl(null)
                toast.success("Avatar excluido com sucesso!")
            } catch (err) {
                toast.error("Falha ao excluir avatar")
            }
            setLoadingDropAvatar(false)
        }
    }

    //Função que adiciona a foto de perfil do usuário, caso não tenha uma
    async function addAvatar(){
        setLoadingAddAvatar(true)
        try {
            const formData = new FormData()
            formData.append("image", image)

            const res = await api.patch('/users/avatarUrl', formData)
            updateUserData({
                ...data,
                avatarUrl: res.data.avatarUrl
            })
            setAvatarUrl(res.data.avatarUrl)
            setFileUrl("")
            setImage("")
            toast.success("Avatar adicionado com sucesso!")
        } catch (err) {
            toast.error("Falha ao adicionar avatar")
        }
        setLoadingAddAvatar(false)
    }

    function cancelAddAvatar(){
        setFileUrl("")
        setImage("")
    }

    return (
        <div>
            <Container>
                <div className = "title">
                    <h1>Avatar</h1>
                </div>

                {/*Caso o usuário possua avatar, exibe o avatar*/}
                {avatarUrl && 
                <div className="avatar">
                    <img src = {avatarUrl} alt="avatar"/>
                </div>}
                
                {/*Se não possuir avatar, exibe o dropzone para ser possível adicioná-lo*/}
                {!avatarUrl && <Dropzone fileUrl = {fileUrl} setFileUrl = {setFileUrl} setImage = {setImage} image = {image}/>}
                
                <span className = "about">Na HardW desde {months[createdAt.getMonth()]} de {createdAt.getFullYear()}
                    <ReactSVG src = {Happy}/>
                </span>

                {/*Exibe a opção de o usuário excluir seu avatar atual, caso o possua*/}
                {avatarUrl && 
                <Button 
                    className = "btn-avatar" 
                    onClick = {dropAvatar}
                    disabled = {loadingDropAvatar}
                >
                    {loadingDropAvatar ? 
                        <div className="sweet-loading">
                            <LoadingAnimation
                                css={css`
                                width: 100%;
                                `}
                                color={"white"}
                                loading={loadingDropAvatar}

                            />
                        </div> : "Excluir avatar"}
                </Button>}

                {/*Após usuário adicionar avatar ao dropzone, exibe a opção de confirmar ou cancelar*/}
                {image !== "" && !loadingAddAvatar && !avatarUrl &&
                    <div className = "buttons">
                        <Button className = "btn-avatar" onClick = {addAvatar}>Salvar</Button>
                        <Button className = "btn-avatar" onClick = {cancelAddAvatar}>Cancelar</Button>
                    </div>}

                {/*Se o usuário confirmar que quer adicionar o avatar, exibe um loading até terminar o processo*/}
                {loadingAddAvatar && <div className="sweet-loading loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"#F99615"}
                        loading={loadingAddAvatar}
                    />
                </div>}
        
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
