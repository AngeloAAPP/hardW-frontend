import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {Container} from './styles'

import HeaderForm from '../HeaderForm'
import Input from '../../Input'
import Button from '../../Button'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {useAuth} from '../../../contexts/Auth'


const FormLogin = ({changeForm}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const {signIn} = useAuth()


    async function login(){
        setLoading(true)

        try {
            await signIn(email, password)
            setLoading(false)
            history.push('/')
        } catch (err) {
            toast.error(err.toString())
        }

        setLoading(false)
    }

    return (
            <Container>
                <HeaderForm 
                    title = "Bem-vindo novamente!"
                />
                <Input placeholder = "E-mail" value = {email} onChange = {(e => setEmail(e.target.value))}/>
                <Input placeholder = "Senha" type = "password" value = {password} onChange = {(e => setPassword(e.target.value))}/>
                <span onClick = {() => changeForm("ForgotPassword")}>Esqueci minha senha</span>
                <Button onClick = {login} disabled = {loading}>
                    {loading ? <div className="sweet-loading">
                        <LoadingAnimation
                            css={css`
                            width: 100%;
                            `}
                            color={"white"}
                            loading={loading}

                        />
                    </div> : "Entrar"}
                </Button>
                <span>Não possui uma conta? 
                    <Link to = "/register">Cadastre-se</Link>
                </span>
                <ToastContainer/>
            </Container>

    )
}

export default FormLogin
