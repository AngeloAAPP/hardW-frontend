import React, { useState, useEffect } from 'react'
import { Container, Content, Grid } from './styles'
import Header from '../../components/Header'
import AdvertiserCard from '../../components/AdvertiserCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { MdSend, MdMessage, MdComment } from 'react-icons/md'
import api from '../../services/api'

const Advertisement = ({ match }) => {

    const [announcementData, setAnnouncementData] = useState({})


    console.log("dados do anuncio: ", announcementData)

    useEffect(() => {

        async function getData() {
            try {
                const res = await api.get(`/announcements/${match.params.id}`)
                setAnnouncementData(res.data)
            } catch (err) {
                console.log("erro: ", err)
            }
        }

        getData()
    }, [])

    return (
        <Container>
            <Header />
            {Object.values(announcementData).length > 0 && <Content>
                <div className="title">
                    <h1>{announcementData.name}</h1>
                    <h2>Publicado em: {new Date(announcementData.createdAt).toLocaleString("pt-br")}</h2>
                </div>
                <Grid>
                    <div className="left-content">{announcementData.images.length > 0 && <>
                        <div className="main-image">
                            <img src={announcementData.images[0].url} alt="imagem do anúncio" />
                        </div>
                        <div className="all-images">
                            {announcementData.images.map((image, i) => <img key={i} src={image.url} alt="imagem do anúncio" />)}
                        </div>
                    </>}
                        <div className="price">{`R$ ${announcementData.price.toFixed(2).replace(".", ",")}`}</div>
                    </div>
                    <AdvertiserCard user={announcementData.user} />
                </Grid>
                <h1 className="session-title">Descrição do anúncio</h1>
                <p className="description">{announcementData.description}</p>
                <h1 className="session-title">Localidade</h1>
                <div className="location">
                    <div className="info">
                        <h2>Bairro</h2>
                        <h3>{announcementData.user.address.neighbourhood}</h3>
                    </div>
                    <div className="info">
                        <h2>Estado</h2>
                        <h3>{announcementData.user.address.uf}</h3>
                    </div>
                    <div className="info">
                        <h2>Cidade</h2>
                        <h3>{announcementData.user.address.city}</h3>
                    </div>
                </div>
                <h1 className="session-title">Categoria</h1>
                <div className="categories">
                    <div className="info">
                        <img src={announcementData.category.imageUrl} alt="categoria" />
                        <p>{announcementData.category.name}</p>
                    </div>
                    {announcementData.subcategory && <div className="info">
                        <img src={announcementData.subcategory.imageUrl} alt="subcategoria" />
                        <p>{announcementData.subcategory.name}</p>
                    </div>}
                </div>
                <h1 className="session-title">Perguntas</h1>
                <div className="questions-container">
                    <div className="ask">
                        <Input placeholder="Escreva sua pergunta" />
                        <Button><MdSend /></Button>
                    </div>
                    <div className="question">
                        <div className="content">
                            <MdMessage />
                            <p>É compatível com i7 3770k?<time>12/08/2020 08:47</time></p>
                        </div>
                        <div className="to-reply">
                            <Input placeholder="Responder" />
                            <Button><MdSend /></Button>
                        </div>
                    </div>
                    <div className="question">
                        <div className="content">
                            <MdMessage />
                            <p>Produto ja sofreu algum tipo de reparo?? <time>12/08/2020 08:47</time></p>

                        </div>
                        <div className="answer">
                            <MdComment />
                            <p>Olá, produto nunca sofreu nenhum tipo de reparo, apenas manutenções preventivas <time>10/08/2020 17:33</time></p>

                        </div>
                    </div>
                    <div className="question">
                        <div className="content">
                            <MdMessage />
                            <p>Como funciona a entrega? envia pelos correios? pode retirar pessoalmente? ou faz a entrega
na minha casa? <time>12/08/2020 08:47</time></p>

                        </div>
                        <div className="answer">
                            <MdComment />
                            <p>A gente pode combinar um ponto de entrega ou precisaria retirar na minha casa... Não faço entrega e infelizmente não envio pelos correios.<time>10/08/2020 17:33</time></p>
                        </div>
                    </div>
                </div>
            </Content>}
        </Container>
    )
}

export default Advertisement
