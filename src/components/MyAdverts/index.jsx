import React from 'react'
import {Container} from './styles'
import Card from '../CardEditableAdvertisement'

const MyAdverts = () => {
    return (
        <Container>
            <Card 
                title = "Placa mãe "
                image = "https://img.olx.com.br/images/15/156064801212382.jpg"
                price = "R$ 120,00"
                timestamp = "Publicado em: 07/08/2020 16:20"
            />

            <Card 
                title = "Placa mãe para intel socket 1155 "
                image = "https://http2.mlstatic.com/D_NQ_NP_838032-MLB42699520512_072020-W.jpg"
                price = "R$ 120,00"
                timestamp = "Publicado em: 07/08/2020 16:20"
            />
        </Container>
    )
}

export default MyAdverts
