import React, {useState, useEffect} from 'react'
import Combobox from '../Combobox'
import axios from 'axios'

const ComboboxCity = ({uf, city, setCity, ...rest}) => {

    const [cities, setCities] = useState([])

    useEffect(() => {

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => setCities(response.data))
    
    }, [uf])

    return (
        <Combobox value = {city} id = "city" onChange = {e => setCity(e.target.value)} {...rest}>
            <option value = "">Selecione a cidade</option>
            {cities.map(city => <option key = {city.id} value = {city.nome}>{city.nome}</option>)}
        </Combobox>
    )
}

export default ComboboxCity
