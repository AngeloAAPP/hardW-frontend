import React, {useEffect, useState} from 'react'
import {Container} from './styles'
import Input from '../../Input'
import CurrencyInput from 'react-currency-input'
import Button from '../../Button'
import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api'
import {useAuth} from '../../../contexts/Auth'
import {useHistory} from 'react-router-dom'

const FormEditAdvertisement = ({data}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("0")
    const [loading, setLoading] = useState(false) 
    const {updateUserData, data: userData} = useAuth()
    const history = useHistory()

    useEffect(() => {
        setTitle(data.name)
        setDescription(data.description)
        setPrice(data.price)
      }, [])

    async function editAdvertisement(){
        let newData = {}

        if(title !== data.name)
            newData.name = title

        if(description !== data.description)
            newData.description = description

        if(price !== data.price){
            let formatedPrice = price.split("R$")
            formatedPrice = formatedPrice.length === 1 ? formatedPrice[0] : formatedPrice[1]

            newData.price = formatedPrice
        }

        if(Object.keys(newData).length > 0)
        {
            setLoading(true)
            try {
                await api.put(`/announcements/${data.id}`, newData)
                updateUserData({
                    adverts: [
                        {...userData.adverts.filter(advertisement => advertisement.id === data.id)[0], ...newData},
                        ...userData.adverts.filter(advertisement => advertisement.id !== data.id)
                    ]
                })
                
                history.push('/profile?view=MyAdverts')
            } catch (err) {
                console.log("errooo: ", err)
                toast.error(err.response.data.message)
            }
            setLoading(false)
        }
        else
            history.push('/profile?view=MyAdverts')
        
    }

    return (
        <Container>
            <h1>Informações do anúncio</h1>
            <Input placeholder = "Título" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            <textarea placeholder = "Descrição" value = {description} onChange = {(e) => setDescription(e.target.value)}></textarea>
            <CurrencyInput 
                precision = "0" 
                prefix = "R$ " 
                thousandSeparator = "."
                value = {price} 
                onChangeEvent = {(e, maskedvalue) => setPrice(maskedvalue)}
                maxLength="13"    
            />

            <Button onClick = {editAdvertisement} className = "btn" disabled = {loading}>{loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Salvar"}</Button>
            
            <ToastContainer/>
        </Container>
    )
}

export default FormEditAdvertisement
