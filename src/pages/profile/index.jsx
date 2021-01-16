import React,{useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Container ,Grid, Menu} from './styles'
import Header from '../../components/Header'
import FormEditUserData from '../../components/forms/FormEditUserData'
import FormEditUserAddress from '../../components/forms/FormEditUserAddress'
import MyAdverts from '../../components/MyAdverts'
import FormEditPassword from '../../components/forms/FormEditPassword'
import FormDeleteAccount from '../../components/forms/FormDeleteAccount'
import {useAuth} from '../../contexts/Auth'

const Profile = () => {

    const history = useHistory()
    const {authenticated , loading} = useAuth()

    if(!authenticated && !loading)
        history.push('/login?redirect=profile')

    let queryParam = new URLSearchParams(useLocation().search).get("view");
    let initialMenu = queryParam? queryParam : "FormEditUserData"

    const [form, setForm] = useState(initialMenu)

    return (
        <Container>
            <Header/>
            <Grid>
                <span className = "suggestion">Arraste para a esquerda para mais opções</span>
                <Menu>
                    <ul>
                        <li className = {form === "FormEditUserData" ? "active" : ""} onClick = {() => setForm("FormEditUserData")}>Dados cadastrais</li>
                        <li className = {form === "FormEditUserAddress" ? "active" : ""} onClick = {() => setForm("FormEditUserAddress")}>Endereço</li>
                        <li className = {form === "MyAdverts" ? "active" : ""} onClick = {() => setForm("MyAdverts")}>Meus anúncios</li>
                        <li className = {form === "FormEditPassword" ? "active" : ""} onClick = {() => setForm("FormEditPassword")}>Alterar senha</li>
                        <li className = {form === "FormDeleteAccount" ? "active" : ""} onClick = {() => setForm("FormDeleteAccount")}>Excluir minha conta</li>
                    </ul>
                </Menu>
                {form === "FormEditUserData" && <FormEditUserData/>}
                {form === "FormEditUserAddress" && <FormEditUserAddress/>}   
                {form === "MyAdverts" && <MyAdverts/>}    
                {form === "FormEditPassword" && <FormEditPassword/>}
                {form === "FormDeleteAccount" && <FormDeleteAccount/>}       
            </Grid>
        </Container>
    )
}

export default Profile
