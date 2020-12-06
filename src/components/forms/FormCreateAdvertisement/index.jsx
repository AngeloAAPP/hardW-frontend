import React, {useEffect, useState} from 'react'
import {Container} from './styles'
import Input from '../../Input'
import Combobox from '../../Combobox'
import Button from '../../Button'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../services/api'

const FormCreateAdvertisement = ({images}) => {

    const [categories, setCategories] = useState([])
    const [selectedCategorie, setSelectedCategorie] = useState("")
    const [selectedSubCategorie, setSelectedSubCategorie] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [loading, setLoading] = useState(false) 

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

    async function createAdvertisement(){
        if(selectedCategorie == "")
        {
            toast.error("Selecione a categoria do anúncio")
            return
        }
        
        const data = new FormData()

        data.append("name", title)
        data.append("description", description)
        data.append("price", price)
        data.append("categoryID", selectedCategorie)
        
        if(selectedSubCategorie !== "")
            data.append("subcategoryID", selectedSubCategorie)
        
        images.forEach(image => {
            data.append("image", image)
        });

        setLoading(true)

        try {
            const response = await api.post('/adverts', data)
            toast.success("cadastrado com sucesso")
        } catch (err) {
            toast.error(err.response.data.message)
        }

        setLoading(false)

    } 

    return (
        <Container>
            <h1>Informações do anúncio</h1>
            <Input placeholder = "Título" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            <Input placeholder = "Descrição" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            <Input placeholder = "Preço (R$)" value = {price} onChange = {(e) => setPrice(e.target.value)}/>

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
            <Button className = "btn" onClick = {createAdvertisement} disabled = {loading}>{loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Anunciar"}</Button>
            
            <ToastContainer/>
        </Container>
    )
}

export default FormCreateAdvertisement
