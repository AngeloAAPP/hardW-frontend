import React, {useState} from 'react'
import {Container, FindAdvertsLocation, Main, Filters, Adverts, Action} from './styles'
import {FaFilter, FaSearch} from 'react-icons/fa'

import Header from '../../components/Header'

import ComboboxUF from '../../components/ComboboxUF'
import ComboboxCity from '../../components/ComboboxCity'

import Button from '../../components/Button'

import AdvertisementCard from '../../components/AdvertisementCard'

const Home = () => {

    
    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")
    const [showFiltersMobile, setShowFiltersMobile] = useState(false)

    return (
        <Container>
            <Header />
            <FindAdvertsLocation>
                <div className="content">
                    <h1>Encontre anúncios próximos a você</h1>
                    <div className="seletores">
                        <ComboboxUF uf = {uf} setUF = {setUF}/>
                        <ComboboxCity uf = {uf} city = {city} setCity = {setCity}/>
                        <div className = "search">
                            <FaSearch/>
                        </div>  
                    </div>
                </div>
            </FindAdvertsLocation>
            <Main>
                <Filters showFiltersMobile = {showFiltersMobile}>
                    <div className="title" onClick = {() => setShowFiltersMobile(!showFiltersMobile)}>
                      <FaFilter/>
                      <h2><span>{showFiltersMobile ? "Ocultar " : "Exibir "}</span>Filtros</h2>
                    </div>
                   
                    <form id = "filters">
                        <details open>
                            <summary>Categorias</summary>
                            <div className = "options">
                                <div className = "option">
                                    <input type="radio" name="category" id="allCategories" value = "%"/>
                                    <label htmlFor="allCategories">Todas</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Placa mãe" value = "1"/>
                                    <label htmlFor="Placa mãe">Placa mãe</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Processador" value = "2"/>
                                    <label htmlFor="Processador">Processador</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Placa de vídeo" value = "5"/>
                                    <label htmlFor="Placa de vídeo">Placa de vídeo</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Refrigeração" value = "8"/>
                                    <label htmlFor="Refrigeração">Refrigeração</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Fonte de alimentação" value = "6"/>
                                    <label htmlFor="Fonte de alimentação">Fonte de alimentação</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Drives (HD, SSD, DVD)" value = "4"/>
                                    <label htmlFor="Drives (HD, SSD, DVD)">Drives (HD, SSD, DVD)</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Memória ram" value = "3"/>
                                    <label htmlFor="Memória ram">Memória ram</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Periféricos" value = "9"/>
                                    <label htmlFor="Periféricos">Periféricos</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Gabinete" value = "7"/>
                                    <label htmlFor="Gabinete">Gabinete</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="category" id="Outros" value = "10"/>
                                    <label htmlFor="Outros">Outros</label>
                                </div>
                                
                            </div>
                        </details>

                        <details open>
                            <summary>Subcategorias</summary>
                            <div className = "options">
                            <div className = "option">
                                    <input type="radio" name="subcategory" id="allSubcategories" value = "%"/>
                                    <label htmlFor="allSubcategories">Todas</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="amd" value = "amd"/>
                                    <label htmlFor="amd">amd</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="intel" value = "intel"/>
                                    <label htmlFor="intel">intel</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="nvidia" value = "nvidia"/>
                                    <label htmlFor="nvidia">nvidia</label>
                                </div>
                                
                            </div>
                        </details>

                        <details open>
                            <summary>Precos</summary>
                            <div className = "options">
                                
                                
                            </div>
                        </details>

                        <Button type = "button">Filtrar</Button>
                    </form>

                </Filters>
                <Adverts>
                    <AdvertisementCard title = "Placa mãe para intel socket 1155 "
                      image = "https://http2.mlstatic.com/D_NQ_NP_838032-MLB42699520512_072020-W.jpg"
                       price = "R$ 120,00"
                      timestamp = "Publicado em: 07/08/2020 16:20"
                      neighbourhood = "Vila Lemos"
                      city = "Campinas"
                      uf = "SP"/>

                    <AdvertisementCard title = "Placa mãe "
                                    image = "https://img.olx.com.br/images/15/156064801212382.jpg"
                                    price = "R$ 120,00"
                                    timestamp = "Publicado em: 07/08/2020 16:20"
                                    neighbourhood = "Vila Lemos"
                                    city = "Campinas"
                                    uf = "SP"/>

                    <AdvertisementCard title = "Placa mãe para intel socket 1155 "
                                        image = "https://s.glbimg.com/po/tt/f/original/2012/02/27/memory_module_ddram_20-03-2006.jpg"
                                        price = "R$ 120,00"
                                        timestamp = "Publicado em: 07/08/2020 16:20"/>

                    <AdvertisementCard title = "Placa mãe para intel socket 1155 "
                                        image = "https://photos.enjoei.com.br/public/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83ODY1OTkwLzAxNDVkOWM5OGM2MTExODE1NTIxODM2ODI4YzhhMGI4LmpwZw"
                                        price = "R$ 120,00"
                                        timestamp = "Publicado em: 07/08/2020 16:20"/>

                    <AdvertisementCard title = "Placa mãe para intel socket 1155 "
                                        image = "https://http2.mlstatic.com/D_NQ_NP_838032-MLB42699520512_072020-W.jpg"
                                        price = "R$ 120,00"
                                        timestamp = "Publicado em: 07/08/2020 16:20"/>
              
                </Adverts>
            </Main>
        </Container>
    )
}

export default Home
