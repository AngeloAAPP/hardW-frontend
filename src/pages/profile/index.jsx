import React from 'react'

import {Container ,Grid, Menu} from './styles'
import Header from '../../components/Header'
import FormEditUser from '../../components/FormEditUser'


const Profile = () => {
    return (
        <Container>
            <Header/>
            <Grid>
                <Menu>
                    <ul>
                        <li className = "active">Dados cadastrais</li>
                        <li>Endereço</li>
                        <li>Meus anúncios</li>
                        <li>Alterar senha</li>
                        <li>Excluir minha conta</li>
                    </ul>
                </Menu>
                <FormEditUser/>
            </Grid>
        </Container>
    )
}

export default Profile
