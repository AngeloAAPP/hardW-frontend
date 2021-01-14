import React from 'react'
import {Container} from './styles'
import {useHistory} from 'react-router-dom'

const AdvertisementCard = ({id,title, image, price, timestamp, neighbourhood, city, uf}) => {
    const history = useHistory()

    function showAnnouncement(){
        console.log("executoy")
        history.push(`/advertisement/${id}`)
    }
    return (
        <Container onClick = {showAnnouncement}>
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
