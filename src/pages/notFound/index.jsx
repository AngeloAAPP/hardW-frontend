import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const NotFound = ({announcement = false}) => {
    return (
        <Container>
            <div className="content">
                <Link to="/">
                    <img src={Logo} alt="hardW" />
                </Link>
                <div>
                    <p>Ops...</p>
                    <p>{announcement ? "Anúncio não encontrado" : "Página não encontrada"}</p>
                    <Link to="/" className = "link">Voltar ao início</Link>
                </div>
            </div>
        </Container>
    )
}

export default NotFound
