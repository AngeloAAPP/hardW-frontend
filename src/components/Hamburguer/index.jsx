import React from 'react'
import {Container, Linha} from './styles'

const Hamburguer = ({...props}) => {
    return (
        <Container  {...props}>
            <Linha />
            <Linha />
            <Linha />
        </Container>
    )
}

export default Hamburguer
