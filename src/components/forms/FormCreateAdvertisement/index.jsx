import React, {useState} from 'react'
import {Container} from './styles'
import Input from '../../Input'
import Combobox from '../../Combobox'
import Button from '../../Button'

const FormCreateAdvertisement = () => {

    const [selectedCategorie, setSelectedCategorie] = useState("1")
    const [selectedSubCategorie, setSelectedSubCategorie] = useState("")

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
            {selectedCategorie !== "" && categories.filter(categories => categories.id === parseInt(selectedCategorie))[0].subcategories.length > 0 && 
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
