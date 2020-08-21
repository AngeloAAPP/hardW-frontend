import React from 'react'

import {Container, LeftSide, RightSide} from './styles'
import Logo from '../../assets/logo.png'

const Login = () => {

    return (
        <Container>
            <LeftSide>
                <a href = "#">
                    <img src = {Logo}/>
                </a>
            </LeftSide>
            <RightSide>

            </RightSide>
        </Container>
    )
}

export default Login
