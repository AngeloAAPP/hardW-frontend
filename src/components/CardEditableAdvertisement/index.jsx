import React from 'react'
import {Container} from './styles'

import Button from '../Button'

const CardEditableAdvertisement = ({title, image, price, timestamp}) => {
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
                </div>
            </div>
            <div className="footer">
            <span>{timestamp}</span>
                <div className="buttons">
                    <Button type = "button">Editar</Button>
                    <Button type = "button">Excluir</Button>
                </div>
            </div>
        </Container>
    )
}

export default CardEditableAdvertisement
