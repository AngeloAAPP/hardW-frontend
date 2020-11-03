import React, {useEffect, useState} from 'react'
import {Container} from './styles'
import Input from '../../Input'
import Combobox from '../../Combobox'
import Button from '../../Button'

import api from '../../../services/api'

const FormCreateAdvertisement = () => {

    const [categories, setCategories] = useState([])
    const [selectedCategorie, setSelectedCategorie] = useState("")
    const [selectedSubCategorie, setSelectedSubCategorie] = useState("")

    useEffect(() => {

      async function getCategories(){
        const categories = await api.get('/categories')
        setCategories(categories.data)
      }
 
      getCategories()
    }, [])
    
    function selectCategorie(e){
        setSelectedCategorie(e.target.value)
        setSelectedSubCategorie("")
    }

    return (
        <Container>
            <h1>Informações do anúncio</h1>
            <Input placeholder = "Título" />
            <Input placeholder = "Descrição" />
            <Input placeholder = "Preço (R$)" />

            <label>Selecione a categoria</label>
            <Combobox value = {selectedCategorie} onChange = {selectCategorie}>
                <option value="">Selecione uma categoria</option>
                {categories.map(categorie => <option value={categorie.id} key = {categorie.id}>{categorie.name}</option>)}
            </Combobox>
            {categories.length > 0 && selectedCategorie !== "" && categories.filter(categories => categories.id === parseInt(selectedCategorie))[0].subcategories.length > 0 && 
                <div className = "subcategories">
                    <label>Selecione uma subcategoria</label>
                    {categories.filter(categories => categories.id === parseInt(selectedCategorie))[0].subcategories.map(subcategorie => 
                        <img 
                            key = {subcategorie.id} 
                            src = {subcategorie.imageUrl} 
                            onClick = {() => setSelectedSubCategorie(subcategorie.id)}
                            className = {selectedSubCategorie === subcategorie.id? "selected" : ""}
                            alt = {subcategorie.name}
                        />
                    )}
                </div>
            }
            <Button>Anunciar</Button>
            
            
        </Container>
    )
}

export default FormCreateAdvertisement
