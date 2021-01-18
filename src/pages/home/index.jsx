import React, {useState, useEffect} from 'react'
import {Container, FindAdvertsLocation, Main, Filters, Adverts} from './styles'
import {FaFilter, FaSearch, FaSearchPlus} from 'react-icons/fa'
import Header from '../../components/Header'
import ComboboxUF from '../../components/ComboboxUF'
import ComboboxCity from '../../components/ComboboxCity'
import Button from '../../components/Button'
import AdvertisementCard from '../../components/AdvertisementCard'
import api from '../../services/api'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import CurrencyInput from 'react-currency-input'

const Home = () => {

    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")
    const [showFiltersMobile, setShowFiltersMobile] = useState(false)
    const [announcements, setAnnouncements] = useState([])
    const [loadingAnnouncements, setLoadingAnnouncements] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [search, setSearch] = useState("")

    console.log(maxPrice)

    useEffect(() => {

        async function getData() {

            setLoadingAnnouncements(true)

            try {
                let params = {}

                if(search !== "")
                    params.search = `%${search}%`

                //Verifica se existe filtro de categoria
                try {
                    let category = Array
                                    .prototype
                                    .slice
                                    .call(document.getElementsByName('category'))
                                    .filter(category => category.checked)[0]
                                    .value

                    if(category !== "%")
                        params.categoryID = category

                } catch (err) {}

                //verifica se existe filtro de subcategoria
                try {
                    let subcategory = Array
                                        .prototype
                                        .slice
                                        .call(document.getElementsByName('subcategory'))
                                        .filter(subcategory => subcategory.checked)[0]
                                        .value

                    if(subcategory !== "%")
                        params.subcategoryID = subcategory

                } catch (err) {}
               
                //verifica se existe filtro de cidade
                if(city !== "")
                    params.city = city

                //verifica se existe filtro de estado
                if(uf !== "")
                    params.uf = uf

                if(minPrice && minPrice !== "")
                    params.min = minPrice

                if(maxPrice && maxPrice !== "")
                    params.max = maxPrice

                const res = await api.get('/announcements',{
                    params
                })
                setAnnouncements(res.data)
            } catch (err) {
                console.log("erro: ", err)
            }
            setLoadingAnnouncements(false)
        }

        getData()
    }, [refresh])

    return (
        <Container>
            <Header />
            <FindAdvertsLocation>
                <div className="content">
                    <h1>Encontre anúncios próximos a você</h1>
                    <div className="seletores">
                        <ComboboxUF uf = {uf} setUF = {setUF}/>
                        <ComboboxCity uf = {uf} city = {city} setCity = {setCity}/>
                        <div className = "search" onClick = {() => setRefresh(!refresh)}>
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
                        <h3><FaSearch/> O que você está buscando?</h3>
                        <input type="text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Ex: core i7" maxLength = "50" spellCheck = "false"/>
                        <details open>
                            <summary>Categorias</summary>
                            <div className = "options">
                                <div className = "option">
                                    <input type="radio" name="category" id="allCategories" defaultChecked value = "%"/>
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
                                    <input type="radio" name="subcategory" id="allSubcategories" defaultChecked value = "%"/>
                                    <label htmlFor="allSubcategories">Todas</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="amd" value = "2"/>
                                    <label htmlFor="amd">amd</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="intel" value = "1"/>
                                    <label htmlFor="intel">intel</label>
                                </div>
                                <div className = "option">
                                    <input type="radio" name="subcategory" id="nvidia" value = "3"/>
                                    <label htmlFor="nvidia">nvidia</label>
                                </div>
                                
                            </div>
                        </details>

                        <details open>
                            <summary>Precos</summary>
                            <div className = "options">
                                <div className = "option">
                                    <CurrencyInput className = "input-price"
                                        precision = "0"
                                        thousandSeparator = "."
                                        allowEmpty
                                        placeholder = "Mínimo"
                                        value = {minPrice}
                                        maxLength="10"
                                        onChangeEvent = {(e, maskedvalue) => {
                                            setMinPrice(maskedvalue)

                                            if(minPrice === "")
                                                setMinPrice(null)
                                        }} 
                                    />
                                    <CurrencyInput className = "input-price"
                                        precision = "0"
                                        thousandSeparator = "."
                                        allowEmpty
                                        placeholder = "Máximo"
                                        value = {maxPrice}
                                        maxLength="10"
                                        onChangeEvent = {(e, maskedvalue) => {
                                            setMaxPrice(maskedvalue)

                                            if(maxPrice === "")
                                                setMaxPrice(null)
                                        }}  
                                    />                                    
                                </div>
                            </div>
                        </details>

                        <Button type = "button" onClick = {() => setRefresh(!refresh)}>Filtrar</Button>
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
                            price = {`R$ ${announcement.price},00`}
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
