import React from 'react'
import {Container} from './styles'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'

const Loading = () => {
    return (
        <Container>
             <div className="sweet-loading">
                <LoadingAnimation
                    css={css`
                    width: 100%;
                    `}
                    color={"orange"}
                    loading={true}
                />
            </div>
            <p>Carregando dados do perfil</p>
        </Container>
    )
}

export default Loading
