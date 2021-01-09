import React from 'react'
import {Container, Content, Grid} from './styles'
import Header from '../../components/Header'
import AdvertiserCard from '../../components/AdvertiserCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {MdSend, MdMessage, MdComment} from 'react-icons/md'

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
                   <div className = "left-content">
                        <div className="main-image">
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                        </div>
                        <div className="all-images">
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                            <img src="https://img.olx.com.br/thumbs256x256/26/266096238848434.jpg" alt=""/>
                        </div>
                        <div className="price">R$ 120,00</div>
                   </div>
                   <AdvertiserCard/>
               </Grid>
               <h1 className = "session-title">Descrição do anúncio</h1>
               <p className = "description">Placa mãe usada por 3 anos, muito bem conservada, não abaixo valor</p>
               <h1 className = "session-title">Localidade</h1>
               <div className="location">
                   <div className="info">
                       <h2>Bairro</h2>
                       <h3>Vila Lemos</h3>
                   </div>
                   <div className="info">
                       <h2>Estado</h2>
                       <h3>SP</h3>
                   </div>
                   <div className="info">
                       <h2>Cidade</h2>
                       <h3>Campinas</h3>
                   </div>
               </div>
               <h1 className="session-title">Categoria</h1>
               <div className = "categories">
                    <div className = "info">
                        <img src="https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/placa-mae_yk7h3p.svg" alt=""/>
                        <p>Placa mãe</p>
                    </div>
                    <div className = "info">
                        <img src="https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/intel_unvydo.svg" alt=""/>
                        <p>Intel</p>
                    </div>
               </div>
               <h1 className="session-title">Perguntas</h1>
               <div className="questions-container">
                 <div className="ask">
                    <Input placeholder = "Escreva sua pergunta"/>
                    <Button><MdSend/></Button>
                 </div>
                 <div className="question">
                    <div className="content">
                        <MdMessage/>
                        <p>É compatível com i7 3770k?<time>12/08/2020 08:47</time></p>
                    </div>
                    <div className="to-reply">
                        <Input placeholder = "Responder"/>
                        <Button><MdSend/></Button>
                    </div>
                 </div>
                 <div className="question">
                    <div className="content">
                        <MdMessage/>
                        <p>Produto ja sofreu algum tipo de reparo?? <time>12/08/2020 08:47</time></p>
                        
                    </div>
                    <div className="answer">
                        <MdComment/>
                        <p>Olá, produto nunca sofreu nenhum tipo de reparo, apenas manutenções preventivas <time>10/08/2020 17:33</time></p>
                        
                    </div>
                 </div>
                 <div className="question">
                    <div className="content">
                        <MdMessage/>
                        <p>Como funciona a entrega? envia pelos correios? pode retirar pessoalmente? ou faz a entrega
na minha casa? <time>12/08/2020 08:47</time></p>
                        
                    </div>
                    <div className="answer">
                        <MdComment/>
                        <p>A gente pode combinar um ponto de entrega ou precisaria retirar na minha casa... Não faço entrega e infelizmente não envio pelos correios.<time>10/08/2020 17:33</time></p>
                    </div>
                 </div>
               </div>
            </Content>
        </Container>
    )
}

export default Advertisement
