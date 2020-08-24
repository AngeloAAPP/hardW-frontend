import React from 'react'

import {Container} from './styles'

import HeaderForm from '../../components/HeaderForm'
import Button from '../../components/Button'
import {FaArrowLeft} from 'react-icons/fa'
import Dropzone from '../../components/DropzoneAvatar'

const FormUserImage = ({changeForm}) => {
    return (
        <Container>
            <HeaderForm 
                title = "Cadastro de usuário"
                description = "Deseja adicionar uma imagem?"
            />
            <span onClick = {() => changeForm("FormUserAddress")}>
                <FaArrowLeft/>
                Voltar
            </span>
            <Dropzone/>
            <Button>
                Cadastrar
            </Button>
        </Container>
    )
}

export default FormUserImage
