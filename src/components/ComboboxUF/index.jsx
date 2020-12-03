import React, {useState, useEffect} from 'react'
import Combobox from '../Combobox'
import axios from 'axios'

const ComboboxUF = ({uf, setUF, setCity = null, ...rest}) => {

    const [ufs, setUfs] = useState([])

    //states
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => setUfs(response.data))
    }, [])

    function changeUF(e){
        setUF(e.target.value)

        if(setCity)
            setCity("")
    }

    return (
        <Combobox value = {uf} id = "uf" onChange = {changeUF} {...rest}>
            <option value = "">Selecione o estado</option>
            {ufs.map(uf => <option key = {uf.id} value = {uf.sigla}>{uf.nome}</option>)}
        </Combobox>
    )
}

export default ComboboxUF
