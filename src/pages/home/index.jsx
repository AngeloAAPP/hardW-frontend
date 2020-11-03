import React, {useState, useEffect} from 'react'
import {Container, FindAdvertsLocation, Main, Filters, Adverts} from './styles'
import {FaFilter} from 'react-icons/fa'

import Header from '../../components/Header'

import ComboboxUF from '../../components/ComboboxUF'
import ComboboxCity from '../../components/ComboboxCity'

import Button from '../../components/Button'

import AdvertisementCard from '../../components/AdvertisementCard'

import api from '../../services/api'


const Home = () => {

    
    const [categories, setCategories] = useState([])
    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {

      async function getCategories(){
        const categories = await api.get('/categories')
        setCategories(categories.data)
      }
 
      getCategories()
    }, [])

    return (
        <Container>
            <Header />
            <FindAdvertsLocation>
                <div className="content">
                    <h1>Encontre anúncios próximos a você</h1>
                    <div className="seletores">
                        <ComboboxUF uf = {uf} setUF = {setUF}/>
                        <ComboboxCity uf = {uf} city = {city} setCity = {setCity}/>
                    </div>
                </div>
            </FindAdvertsLocation>
            <Main>
                <Filters>
                    <div className="title">
                      <FaFilter/>
                      <h2> Filtros</h2>
                    </div>
                   
                    <form id = "filters">
                        <details open>
                            <summary>Categorias</summary>
                            <div className = "options">
                                <div className = "option">
                                    <input type="radio" name="category" id="all" value = "%"/>
                                    <label htmlFor="all">Todas</label>
                                </div>
                                {categories.map(category => 
                                    <div className = "option">
                                        <input type="radio" name="category" id={category.name} value = {category.id}/>
                                        <label htmlFor={category.name}>{category.name}</label>
                                    </div>)
                                }
                            </div>
                        </details>

                        <details open>
                            <summary>Subcategorias</summary>
                            <div className = "options">
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
