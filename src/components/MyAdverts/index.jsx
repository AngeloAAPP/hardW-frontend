import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Container} from './styles'
import Card from '../CardEditableAdvertisement'
import {toast,ToastContainer} from 'react-toastify'
import {useAuth} from '../../contexts/Auth'

const MyAdverts = () => {

    const {data} = useAuth()
    let showSuccessCreateAnnouncement = new URLSearchParams(useLocation().search).get("success")

    useEffect(() => {

        if(showSuccessCreateAnnouncement)
            toast.success("Anúncio cadastrado com sucesso!")
    }, [])
    

    return (
        <Container>
            {
                data.adverts.length > 0 ?
                <>
                    {
                        data.adverts.map(advertisement => {
                        const datetime = new Date(advertisement.createdAt)
                        
                        return <Card  
                            key = {advertisement.id}
                            id = {advertisement.id}
                            title = {advertisement.name}
                            image = {advertisement.images.length > 0 ? advertisement.images[0].url : 'https://www.tudooclub.com.br/wp-content/uploads/2020/08/Padrao-Capa-Anuncio-Site-Sem-foto.png'}
                            price = {`R$ ${advertisement.price},00`}
                            timestamp = {`Publicado em: ${datetime.toLocaleString('pt-br')}`}
                        />})
                    } 
                </> : <p>Nenhum anúncio cadastrado</p>
            }
            <ToastContainer/>
        </Container>
    )
}

export default MyAdverts
