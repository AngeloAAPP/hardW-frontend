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

import api from '../../../services/api'
import {useAuth} from '../../../contexts/Auth'
import {useProfileUser} from '../../../contexts/Profile'


const FormLogin = ({changeForm}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const {signIn} = useAuth()
    const {setData, setID} = useProfileUser()

    async function login(){
        setLoading(true)

        try {
            const response = await api.post('/authenticate', {
                email,
                password
            })
            
            const {id,name, lastName, whatsapp, avatarUrl} = response.data
            const {Authorization, Refresh} = response.headers

            const data = {
                name,
                lastName,
                whatsapp,
                avatarUrl
            }

            setID(id)
            setData(data)
            signIn(Authorization, Refresh)
            setLoading(false)
        } catch (err) {
            try {
                toast.error(err.response.data.message)
            } catch (error) {}
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
