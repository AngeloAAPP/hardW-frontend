import React from 'react'
import {Container, Content} from './styles'
import {MdInsertEmoticon} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {useAuth} from '../../contexts/Auth'
import Button from '../Button'

const AdvertiserCard = () => {

    const {authenticated} = useAuth()

    return (
        <Container>
            <Content>
                <h2>Anunciante</h2>
                <div className="image">
                    <img src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-1/p160x160/116375165_3244624045636258_6067593481108832953_n.jpg?_nc_cat=104&ccb=2&_nc_sid=dbb9e7&_nc_ohc=NtWxiLzOh74AX9bzun1&_nc_ht=scontent.fcpq5-1.fna&tp=6&oh=18fe8fb2c0af24b346252bf5d48cecb8&oe=600A813E" alt="Foto do anunciante"/>
                </div>
                <h3>Angelo Scolfaro</h3>
                <span>Na HardW desde julho de 2020 <MdInsertEmoticon/></span>
            </Content>
            <div className = "contact">
                {!authenticated ? <p>Faça login para visualizar o whatsapp</p> : <Button><FaWhatsapp/><div className="text">WhatsApp</div></Button>}
            </div>
        </Container>
    )
}

export default AdvertiserCard
