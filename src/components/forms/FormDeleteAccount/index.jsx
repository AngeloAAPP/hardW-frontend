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

import {Confirm} from 'react-st-modal'

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

    const ConfirmText = () => {
        return <div>
            <p>Todos os seus dados, incluindo anúncios, imagens de anúncios, perfil serão perdidos e não poderão ser recuperados. </p>
            <p style = {{marginTop: '10px'}}>Ao final do processo, você será redirecionado.</p>
        </div>
    }

    async function confirmAction(){
        const confirm = await Confirm(<ConfirmText/>, 
            'Tem certeza que deseja excluir sua conta?', 'Excluir', 'Cancelar');
          
          if (confirm) {
            deleteAccount()
          }
    }



    return (
        <Container>
            <ReactSVG src = {Sad}/>

            <div className="warnings">
                <h1>Tem certeza que deseja excluir a sua conta?</h1>
                <h2>Todos os seus dados e anúncios serão perdidos.</h2>
            </div>
            <Button onClick = {confirmAction} disabled = {loading}>{loading ? <div className="sweet-loading">
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
