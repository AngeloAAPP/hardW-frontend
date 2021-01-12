import React from 'react'
import {Container, Content} from './styles'
import {MdInsertEmoticon} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {useAuth} from '../../contexts/Auth'
import Button from '../Button'

const AdvertiserCard = ({user}) => {

    const {authenticated} = useAuth()

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const createdAt = new Date(user.createdAt)

    return (
        <Container>
            <Content>
                <h2>Anunciante</h2>
                <div className="image">
                    <img src={user.avatarUrl ? user.avatarUrl : "https://www.cvasolutions.com/wp-content/uploads/2017/03/sem-avatar.jpg"} alt="Foto do anunciante"/>
                </div>
                <h3>{user.name} {user.lastName}</h3>
                <span>Na HardW desde {months[createdAt.getMonth()]} de {createdAt.getFullYear()} <MdInsertEmoticon/></span>
            </Content>
            <div className = "contact">
                {!authenticated ? <p>Faça login para visualizar o whatsapp</p> : <Button><FaWhatsapp/><div className="text">WhatsApp</div></Button>}
            </div>
        </Container>
    )
}

export default AdvertiserCard
