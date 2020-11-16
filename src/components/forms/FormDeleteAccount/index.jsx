import React, {useState} from 'react'
import {Container} from './styles'
import { ReactSVG } from 'react-svg'
import Sad from '../../../assets/icons/sad.svg'
import Button from '../../Button'

import api from '../../../services/api'
import {useAuth} from '../../../contexts/Auth'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const FormEditUser = () => {
    const [loading, setLoading] = useState(false)
    const {signOut} = useAuth()

    async function deleteAccount(){
        setLoading(true)
        try {
            await api.delete('/users')
            signOut()

        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoading(false)
    }

    return (
        <Container>
            <ReactSVG src = {Sad}/>

            <div className="warnings">
                <h1>Tem certeza que deseja excluir a sua conta?</h1>
                <h2>Todos os seus dados e anúncios serão perdidos.</h2>
            </div>
            <Button onClick = {deleteAccount} disabled = {loading}>{loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "EXCLUIR MINHA CONTA"}</Button>
            <ToastContainer/>
        </Container>
    )
}

export default FormEditUser
