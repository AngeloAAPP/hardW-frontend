import React, {useState} from 'react'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Button from '../../Button'
import {FaArrowLeft} from 'react-icons/fa'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api'


const FormForgotPassword = ({changeForm}) => {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    async function sendEmail(){
        setLoading(true)
        try {
            const res = await api.post('/authenticate/forgotPassword', {
                email
            })
            toast.success(res.data.message)
        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoading(false)
    }

    return (
        <Container>
            <HeaderForm 
                title = "Esqueceu sua senha?"
                description = "Não se preocupe, enviaremos um link no seu email para redefinição"
            />
            <span onClick = {() => changeForm("Login")}>
                <FaArrowLeft/>
                Voltar
            </span>
            <Input placeholder = "E-mail" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <Button onClick = {sendEmail} disabled = {loading}>
                {loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Enviar"}
            </Button>
            <ToastContainer/>
        </Container>
    )
}

export default FormForgotPassword
