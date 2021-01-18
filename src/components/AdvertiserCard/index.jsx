import React, {useEffect} from 'react'
import {Container, Content} from './styles'
import {MdInsertEmoticon} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {useAuth} from '../../contexts/Auth'
import Button from '../Button'
import {MdCheck} from 'react-icons/md'

const AdvertiserCard = ({user}) => {

    const {authenticated, id} = useAuth()

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const createdAt = new Date(user.createdAt)

    useEffect(() => {

        /* Recarrega a pagina caso a autenticação tenha expirado e não tenha conseguido obter o whatsapp do anunciante.
        Após recarregar, um novo token é gerado e o whatsapp obtido normalmente, pois ele so é retornado para usuarios 
        autenticados, apesar do endPoint / rota não obrigar autenticação
        A autenticação nesse caso não é renovada automaticamente justamente pela rota nunca retornar um status 401,
        visto que a autenticação não é obrigatória, o client não sabe que precisa atualizar a autenticação. Por isso a 
        necessidade de recarregar a pagina */
        if(authenticated && user && user.id !== id && !user.whatsapp)
            window.location.reload()
    }, [])

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
                {!authenticated ? <p>Faça login para visualizar o whatsapp</p> : 
                <>{user.id === id ? <p>Sou eu! <MdCheck/></p> : 
                <a 
                    href = {`https://api.whatsapp.com/send?phone=55${user.whatsapp.replace(/\(|\)|-/g, '')}&text=Olá, vi um anúncio na hardW e gostaria de conversar`} 
                    target = "_blank">
                        <FaWhatsapp/>
                        <div className="text">WhatsApp</div>
                </a>}</>}
            </div>
        </Container>
    )
}

export default AdvertiserCard
