import React, {memo} from 'react'
import {Container} from './styles'

const HeaderForm = ({title, description}) => {
    return (
        <Container>
            <h1>{title}</h1>
            {description && (
                <h2>{description}</h2>
            )}
        </Container>
    )
}

export default memo(HeaderForm)
