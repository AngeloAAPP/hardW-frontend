import React from 'react'
import {Container} from './styles'
import { ReactSVG } from 'react-svg'
import Sad from '../../../assets/icons/sad.svg'



import Button from '../../Button'

const FormEditUser = () => {

    return (
        <Container>
            <ReactSVG src = {Sad}/>

            <div className="warnings">
                <h1>Tem certeza que deseja excluir a sua conta?</h1>
                <h2>Todos os seus dados e anúncios serão perdidos.</h2>
            </div>
            <Button >EXCLUIR MINHA CONTA</Button>
        </Container>
    )
}

export default FormEditUser
