import React from 'react'
import {Container, Content, Grid} from './styles'
import Header from '../../components/Header'
import AdvertiserCard from '../../components/AdvertiserCard'

const Advertisement = () => {
    return (
        <Container>
            <Header/>
            <Content>
               <div className = "title">
                    <h1>Placa mãe para intel socket 1155 gigabyte</h1>
                    <h2>Publicado em: 07/08/2020 16:20</h2>
               </div>
               <Grid>
                   <div>imagens do anuncio</div>
                   <AdvertiserCard/>
               </Grid>
            </Content>
        </Container>
    )
}

export default Advertisement
