import React from 'react'
import {Container} from './styles'

const AdvertisementCard = ({title, image, price, timestamp, neighbourhood, city, uf}) => {
    return (
        <Container>
            <div className="content">
                <div className="image">
                    <img src={image} alt="teste"/>
                </div>
                <div className="info">
                    <h1>{title}</h1>
                    <h2>{price}</h2>
                    <hr/>
                    <span>Bairro: {neighbourhood}</span>
                    <span>{city}, {uf}</span>
                    <span>{timestamp}</span>
                </div>
            </div>
        </Container>
    )
}

export default AdvertisementCard
