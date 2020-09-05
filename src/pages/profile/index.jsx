import React,{useState} from 'react'

import {Container ,Grid, Menu} from './styles'
import Header from '../../components/Header'
import FormEditUserData from '../../components/forms/FormEditUserData'
import FormEditUserAddress from '../../components/forms/FormEditUserAddress'
import FormEditPassword from '../../components/forms/FormEditPassword'


const Profile = () => {

    const [form, setForm] = useState("FormEditUserData")

    return (
        <Container>
            <Header/>
            <Grid>
                <span className = "suggestion">Arraste para a esquerda para mais opções</span>
                <Menu>
                    <ul>
                        <li className = {form === "FormEditUserData" ? "active" : ""} onClick = {() => setForm("FormEditUserData")}>Dados cadastrais</li>
                        <li className = {form === "FormEditUserAddress" ? "active" : ""} onClick = {() => setForm("FormEditUserAddress")}>Endereço</li>
                        <li>Meus anúncios</li>
                        <li className = {form === "FormEditPassword" ? "active" : ""} onClick = {() => setForm("FormEditPassword")}>Alterar senha</li>
                        <li>Excluir minha conta</li>
                    </ul>
                </Menu>
                {form === "FormEditUserData" && <FormEditUserData/>}
                {form === "FormEditUserAddress" && <FormEditUserAddress/>}     
                {form === "FormEditPassword" && <FormEditPassword/>}    
            </Grid>
        </Container>
    )
}

export default Profile
