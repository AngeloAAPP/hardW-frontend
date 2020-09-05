import React from 'react'
import {Container} from './styles'

import Input from '../../Input'
import Button from '../../Button'

const FormEditUser = () => {

    return (
        <Container>
            <div className = "title">
                <h1>Alterar senha</h1>
            </div>

            <Input type = "password" placeholder = "Senha atual" />
            <Input type = "password" placeholder = "Nova senha" />
            <Input type = "password" placeholder = "Confirmar senha" />
           
            
            <Button >Alterar</Button>
        </Container>
    )
}

export default FormEditUser
