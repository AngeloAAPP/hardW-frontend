import React, {useState} from 'react'
import {Container, FormSendPassword} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'

const ResetPassword = ({ match }) => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function resetPassword(){

        if(password === "" || confirmPassword === "")
        {
            toast.error("Preencha as senhas")
            return
        }

        if(password !== confirmPassword)
        {
            toast.error("As senhas não batem")
            return
        }

        setLoading(true)
        try {
            const res = await api.post(`/authenticate/refreshPassword/${match.params.token}`, {
                password
            })
            toast.success(res.data.message)
        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoading(false)
    }

    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="hardW" />
            </Link>
            <FormSendPassword>
                <Input 
                    type = "password" 
                    placeholder = "Nova senha"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <Input 
                    type = "password" 
                    placeholder = "Confirmar nova senha"
                    value = {confirmPassword}
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                />
                <Button onClick = {resetPassword} disabled = {loading}>
                {loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Alterar senha"}
            </Button>
            </FormSendPassword>
            <ToastContainer/>
        </Container>
    )
}

export default ResetPassword
