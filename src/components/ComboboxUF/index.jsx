import React, {useState, useEffect} from 'react'
import Combobox from '../Combobox'
import axios from 'axios'

const ComboboxUF = ({uf, setUF, ...rest}) => {

    const [ufs, setUfs] = useState([])

    //states
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => setUfs(response.data))
    }, [])

    return (
        <Combobox value = {uf} id = "uf" onChange = {e =>setUF(e.target.value)} {...rest}>
            <option value = "">Selecione o estado</option>
            {ufs.map(uf => <option key = {uf.id} value = {uf.sigla}>{uf.nome}</option>)}
        </Combobox>
    )
}

export default ComboboxUF
