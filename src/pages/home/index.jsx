import React, {useState, useEffect} from 'react'
import {Container, FindAdvertsLocation, Main, Filters, Adverts} from './styles'
import {FaFilter, FaSearch} from 'react-icons/fa'
import Header from '../../components/Header'
import ComboboxUF from '../../components/ComboboxUF'
import ComboboxCity from '../../components/ComboboxCity'
import Button from '../../components/Button'
import AdvertisementCard from '../../components/AdvertisementCard'
import api from '../../services/api'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'


const Home = () => {

    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")
    const [showFiltersMobile, setShowFiltersMobile] = useState(false)
    const [announcements, setAnnouncements] = useState([])
    const [loadingAnnouncements, setLoadingAnnouncements] = useState(false)
    useEffect(() => {

        async function getData() {

            setLoadingAnnouncements(true)

            try {
                const res = await api.get('/announcements')
                setAnnouncements(res.data)
            } catch (err) {
                console.log("erro: ", err)
            }
            setLoadingAnnouncements(false)
        }

        getData()
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
                    {loadingAnnouncements && 
                        <div className = "notice">
                            <span>Carregando anúncios</span>
                            <div className="sweet-loading">
                                <LoadingAnimation
                                    css={css`
                                    width: 100%;
                                    margin-left: 15px;
                                    `}
                                    color={"#F99615"}
                                    loading={loadingAnnouncements}
                                />
                            </div>
                        </div>}
                    {!loadingAnnouncements && announcements.length > 0 && announcements.map(announcement => 
                        <AdvertisementCard 
                            key = {announcement.id}
                            id = {announcement.id}
                            title = {announcement.name}
                            image = {announcement.images.length > 0 ? announcement.images[0].url : 'https://www.tudooclub.com.br/wp-content/uploads/2020/08/Padrao-Capa-Anuncio-Site-Sem-foto.png'}
                            price = {`R$ ${announcement.price.toFixed(2).replace(".", ",")}`}
                            timestamp = {`Publicado em: ${new Date(announcement.createdAt).toLocaleString('pt-br')}`}  
                            neighbourhood = {announcement.user.address.neighbourhood}
                            city = {announcement.user.address.city}
                            uf = {announcement.user.address.uf}  
                        />
                    )}
                    {!loadingAnnouncements && announcements.length === 0 && 
                        <div className = "notice">Nenhum anúncio encontrado.</div>
                    }
                </Adverts>
            </Main>
        </Container>
    )
}

export default Home
