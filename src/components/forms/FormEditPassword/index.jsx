import React, {useState} from 'react'
import {Container} from './styles'

import Input from '../../Input'
import Button from '../../Button'
import api from '../../../services/api'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const FormEditUser = () => {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function changePassword(){

        if(newPassword !== confirmNewPassword)
        {
            toast.error("As senhas não batem")
            return
        }

        setLoading(true)
        try {
            await api.patch('/users/password', {
                currentPassword,
                password: newPassword
            })
            setCurrentPassword("")
            setNewPassword("")
            setConfirmNewPassword("")
            toast.success("Senha alterada com sucesso")
        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoading(false)
    }

    return (
        <Container>
            <div className = "title">
                <h1>Alterar senha</h1>
            </div>

            <Input type = "password" placeholder = "Senha atual" value =  {currentPassword} onChange = {(e) => setCurrentPassword(e.target.value)}/>
            <Input type = "password" placeholder = "Nova senha" value =  {newPassword} onChange = {(e) => setNewPassword(e.target.value)}/>
            <Input type = "password" placeholder = "Confirmar senha" value =  {confirmNewPassword} onChange = {(e) => setConfirmNewPassword(e.target.value)} />
           
            <Button onClick = {changePassword} disabled = {loading}>{loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Alterar"}</Button>
            <ToastContainer/>
        </Container>
    )
}

export default FormEditUser
