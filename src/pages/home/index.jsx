import React, {useState, useEffect} from 'react'
import {Container, FindAdvertsLocation, Main} from './styles'
import {FaFilter} from 'react-icons/fa'

import Header from '../../components/Header'
import Combobox from '../../components/Combobox'
import Button from '../../components/Button'


const Home = () => {

    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])
    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")

    const categories = [
        {
          "id": 1,
          "name": "Placa mãe",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/placa-mae_yk7h3p.svg",
          "subcategories": [
            {
              "id": 1,
              "name": "Intel",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/intel_unvydo.svg"
            },
            {
              "id": 2,
              "name": "AMD",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/amd_kon0b9.svg"
            }
          ]
        },
        {
          "id": 2,
          "name": "Processador",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/processor_en4ppf.svg",
          "subcategories": [
            {
              "id": 1,
              "name": "Intel",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/intel_unvydo.svg"
            },
            {
              "id": 2,
              "name": "AMD",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/amd_kon0b9.svg"
            }
          ]
        },
        {
          "id": 5,
          "name": "Placa de vídeo",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449855/categories/vga_b2oml4.svg",
          "subcategories": [
            {
              "id": 2,
              "name": "AMD",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595452712/subcategories/amd_kon0b9.svg"
            },
            {
              "id": 3,
              "name": "Nvidia",
              "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595453046/subcategories/nvidia_aokkob.svg"
            }
          ]
        },
        {
          "id": 10,
          "name": "Outros",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595451847/categories/outros_lbonzy.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 8,
          "name": "Refrigeração",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/cooler_jxvunz.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 6,
          "name": "Fonte de alimentação",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/powersupply_azuiaz.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 4,
          "name": "Drives (HD, SSD, DVD)",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/drives_yjoux4.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 3,
          "name": "Memória ram",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449855/categories/ram_dgjyig.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 9,
          "name": "Periféricos",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595451356/categories/perifericos_r7ff2o.svg",
          "subcategories": [
            
          ]
        },
        {
          "id": 7,
          "name": "Gabinete",
          "imageUrl": "https://res.cloudinary.com/hardw/image/upload/v1595449853/categories/gabinete_lhzpun.svg",
          "subcategories": [
            
          ]
        }]

    //states
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUfs(data))
    }, [])

    useEffect(() => {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => response.json())
            .then(data => setCities(data))
            
    }, [uf])

    function teste()
    {
        const form = document.getElementById("filters")

        console.log(form.range.value)
    }


    return (
        <Container>
            <Header />
            <FindAdvertsLocation>
                <div className="content">
                    <h1>Encontre anúncios próximos a você</h1>
                    <div className="seletores">
                        <Combobox value = {uf} id = "uf" onChange = {e =>setUF(e.target.value)}>
                            <option value = "">Selecione o estado</option>
                            {ufs.map(uf => <option key = {uf.id} value = {uf.sigla}>{uf.nome}</option>)}
                        </Combobox>
                        <Combobox value = {city} id = "city" onChange = {e => setCity(e.target.value)}>
                            <option value = "">Selecione a cidade</option>
                            {cities.map(city => <option key = {city.id} value = {city.nome}>{city.nome}</option>)}
                        </Combobox>
                    </div>
                </div>
            </FindAdvertsLocation>
            <Main>
                <section className = "filters">
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

                        <Button type = "button" onClick = {teste}>Filtrar</Button>
                    </form>

                </section>
                <section>

                </section>
            </Main>
        </Container>
    )
}

export default Home
