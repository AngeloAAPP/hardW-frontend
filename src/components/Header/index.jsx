import React, { useState } from 'react'
import { Container, Content, Nav } from './styles'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import Hamburguer from '../Hamburguer'



const Header = () => {

    const [mobile, setMobile] = useState(true)
    const [isAuthenticaded, setIsAuthenticated] = useState(true)
    const [hiddenMenu, setHiddenMenu] = useState(true)

    return (
        <Container>
            <Content>
                <Link to="/">
                    <img className="logo" src={Logo} alt='hardW' />
                </Link>
                <Nav mobile={mobile} hiddenMenu={hiddenMenu}>
                    <Hamburguer onClick={() => setMobile(!mobile)} />
                    {
                        isAuthenticaded ?
                        (
                            <ul>
                                <li>
                                    <Link to="/" className="btn">Anunciar</Link>
                                </li>
                                <li className="username"> <label>Angelo Scolfaro</label> </li>
                                <li className="avatar-menu">
                                    <div className="img" onClick={() => setHiddenMenu(!hiddenMenu)}>
                                        <img src="https://avatars2.githubusercontent.com/u/57161008?s=460&u=5048c9861b89bc25fbd68f6e2ad5abb93f0c1682&v=4" alt="avatar" />
                                    </div>
                                    <span>Angelo Scolfaro</span>
                                    <ul>
                                        <li><Link to = "/profile" className = "radius-top">Editar perfil</Link></li>
                                        <li><Link to = "/login">Meus anúncios</Link></li>
                                        <li><strong className = "radius-bottom">Sair</strong></li>
                                    </ul>
                                </li>
                            </ul>
                        ) :
                        (
                            <ul>
                                <li>
                                    <Link to="/register">CADASTRE-SE</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="btn">
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
