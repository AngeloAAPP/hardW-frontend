import React, { useState } from 'react'
import { Container, Content, Nav } from './styles'
import { Link, useHistory } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import NoAvatar from '../../assets/noAvatar.jpg'
import Hamburguer from '../Hamburguer'
import {useAuth} from '../../contexts/Auth'



const Header = () => {

    const [mobile, setMobile] = useState(true)
    const [hiddenMenu, setHiddenMenu] = useState(true)

    const {authenticated, data, signOut} = useAuth()
    const history = useHistory()

    async function handleSignOut(){
        await signOut()
        history.push('/login')
    }
    return (
        <Container>
            <Content>
                <Link to="/">
                    <img className="logo" src={Logo} alt='hardW' />
                </Link>
                <Nav mobile={mobile} hiddenMenu={hiddenMenu}>
                    <Hamburguer onClick={() => setMobile(!mobile)} />
                    {
                        authenticated ?
                        (
                            <ul>
                                <button className = "close" onClick={() => setMobile(!mobile)}>X</button>
                                <li>
                                    <Link to="/newAdvertisement" className="btn">Anunciar</Link>
                                </li>
                                <li className="username"> <label>{`${data.name} ${data.lastName}`}</label> </li>
                                <li className="avatar-menu">
                                    <div className="img" onClick={() => setHiddenMenu(!hiddenMenu)}>
                                        <img src={data.avatarUrl ? data.avatarUrl : NoAvatar} alt="avatar" />
                                    </div>
                                    <span>{`${data.name} ${data.lastName}`}</span>
                                    <ul>
                                        <li><Link to = "/profile" className = "radius-top">Editar perfil</Link></li>
                                        <li><Link to = "/profile?view=MyAdverts" >Meus anúncios</Link></li>
                                        <li><strong className = "radius-bottom" onClick = {handleSignOut}>Sair</strong></li>
                                    </ul>
                                </li>
                            </ul>
                        ) :
                        (
                            <ul>
                                <button className = "close" onClick={() => setMobile(!mobile)}>X</button>
                                <li>
                                    <Link to="/register">CADASTRE-SE</Link>
                                </li>
                                <li>
                                    <Link to="/login" mobile = {mobile} className="btn margintop">
                                        ENTRAR
                                    </Link>
                                </li>
                            </ul>
                        )
                    }
                </Nav>
            </Content>
        </Container>
    )
}

export default Header
