import React, {useState, useEffect} from 'react'
import {Container} from './styles'
import {FaEdit} from 'react-icons/fa'

import Input from '../../Input'
import ComboboxUF from '../../ComboboxUF'
import ComboboxCity from '../../ComboboxCity'
import Button from '../../Button'
import api from '../../../services/api'
import {useAuth} from '../../../contexts/Auth'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const FormEditUser = () => {

    const [locked, setLocked] = useState(true)

    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [street, setStreet] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [loading, setLoading] = useState(false)
    

    const {data, updateUserData} = useAuth()

    function fillData(){
        setUF(data.address.uf.toUpperCase())
        setCity(data.address.city)
        setZipCode(data.address.zipCode)
        setStreet(data.address.street)
        setNeighbourhood(data.address.neighbourhood)
    }

    useEffect(() => {
        fillData()
    }, [])

    console.log(city)

    async function update(){

        if(city === "" || uf === "")
        {
            toast.error("A cidade ou estado não foram preenchidos")
            return
        }

        setLoading(true)

        let newData = {}
        newData.address = {}

        if(uf !== data.address.uf)
            newData.address.uf = uf

        if(city !== data.address.city)
            newData.address.city = city

        if(zipCode !== data.address.zipCode)
            newData.address.zipCode = zipCode
        
        if(street !== data.address.street)
            newData.address.street = street

        if(neighbourhood !== data.address.neighbourhood)
            newData.address.neighbourhood = neighbourhood

        if(Object.keys(newData.address).length > 0){
            try {
                await api.put('/users', newData.address)
                updateUserData({...data, address: {
                    ...data.address,
                    ...newData.address
                }})
            } catch (err) {
                fillData()
                toast.error(err.response.data.message)
            }
        }

        setLocked(true)
        setLoading(false)
    }


    return (
        <Container locked = {locked}>
            <div className = "title">
                <h1>Endereço</h1>
                <FaEdit className = "edit" title = "Editar" onClick = {() => setLocked(false)}/>
            </div>

            <Input placeholder = "Cep" value = {zipCode} onChange = {(e) => setZipCode(e.target.value)} disabled = {locked}/>
            <Input placeholder = "Rua" value = {street}  onChange = {(e) => setStreet(e.target.value)} disabled = {locked}/>
            <Input placeholder = "Bairro" value = {neighbourhood} onChange = {(e) => setNeighbourhood(e.target.value)} disabled = {locked}/>
            <ComboboxUF uf = {uf} setUF = {setUF} setCity = {setCity} disabled = {locked}/>
            <ComboboxCity uf = {uf} city = {city} setCity = {setCity} disabled = {locked}/>
            
            <Button onClick = {update} disabled = {loading}>
                {loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : <div>{locked ? "Salvo" : "Salvar"}</div>}</Button>
            <ToastContainer/>
        </Container>
    )
}

export default FormEditUser
